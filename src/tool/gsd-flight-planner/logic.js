const cameraPresets = {
  mavic3e: { sensorW: 17.3, sensorH: 13, imgW: 5280, imgH: 3956, focal: 24 },
  matrice300: { sensorW: 35.9, sensorH: 24, imgW: 8688, imgH: 5792, focal: 35 },
  autelevoii: { sensorW: 21.3, sensorH: 12, imgW: 6000, imgH: 3376, focal: 20 },
  air3s: { sensorW: 21.3, sensorH: 12, imgW: 6000, imgH: 3376, focal: 21.1 },
};
let currentUnit = 'metric';
function loadStateFromParams(params) {
  if (!params.has('sensorW')) return;
  sensorWidthInput.value = params.get('sensorW');
  sensorHeightInput.value = params.get('sensorH');
  focalLengthInput.value = params.get('focalLength');
  imageWidthInput.value = params.get('imgW');
  imageHeightInput.value = params.get('imgH');
  altitudeInput.value = altitudeSlider.value = params.get('altitude');
  forwardOverlapInput.value = params.get('forward');
  lateralOverlapInput.value = params.get('lateral');
  missionAreaInput.value = params.get('area');
  if (params.has('unit') && params.get('unit') === 'imperial') imperialBtn.click();
}
function applyStoredState(state) {
  const updates = [[sensorWidthInput, 'sensorW'], [sensorHeightInput, 'sensorH'], [focalLengthInput, 'focalLength'], [imageWidthInput, 'imgW'], [imageHeightInput, 'imgH'], [forwardOverlapInput, 'forward'], [lateralOverlapInput, 'lateral'], [missionAreaInput, 'area']];
  updates.forEach(([input, key]) => { if (state[key]) input.value = state[key]; });
  if (state.altitude) altitudeInput.value = altitudeSlider.value = state.altitude;
}
function loadStateFromStorage() {
  const saved = localStorage.getItem('gsd-planner-state');
  if (saved) try { applyStoredState(JSON.parse(saved)); } catch {}
  if (localStorage.getItem('gsd-planner-unit') === 'imperial') imperialBtn.click();
}
function loadState() {
  const params = new URLSearchParams(window.location.search);
  if (params.size > 0) loadStateFromParams(params);
  else loadStateFromStorage();
}
function saveState() {
  const state = {
    sensorW: sensorWidthInput.value,
    sensorH: sensorHeightInput.value,
    focalLength: focalLengthInput.value,
    imgW: imageWidthInput.value,
    imgH: imageHeightInput.value,
    altitude: altitudeInput.value,
    forward: forwardOverlapInput.value,
    lateral: lateralOverlapInput.value,
    area: missionAreaInput.value,
    unit: currentUnit,
  };
  localStorage.setItem('gsd-planner-state', JSON.stringify(state));
  localStorage.setItem('gsd-planner-unit', currentUnit);
}
function getShareUrl() {
  const params = new URLSearchParams({
    sensorW: sensorWidthInput.value,
    sensorH: sensorHeightInput.value,
    focalLength: focalLengthInput.value,
    imgW: imageWidthInput.value,
    imgH: imageHeightInput.value,
    altitude: altitudeInput.value,
    forward: forwardOverlapInput.value,
    lateral: lateralOverlapInput.value,
    area: missionAreaInput.value,
    unit: currentUnit,
  });
  const url = new URL(window.location.href);
  url.search = params.toString();
  return url.toString();
}
function updateUnits() {
  altUnit.textContent = currentUnit === 'metric' ? 'm' : 'ft';
  areaUnit.textContent = currentUnit === 'metric' ? 'm²' : 'ft²';
  spacingUnit.textContent = currentUnit === 'metric' ? 'm' : 'ft';
  areaInputUnit.textContent = currentUnit === 'metric' ? 'm²' : 'ft²';
  gsdUnitLabel.textContent = currentUnit === 'metric' ? 'cm/px' : 'in/px';
  const cA = parseFloat(missionAreaInput.value) || 0;
  missionAreaInput.value = (currentUnit === 'imperial' ? cA * 10.764 : cA / 10.764).toFixed(1);
}
function updateLabels() {
  const u = currentUnit === 'metric';
  const uI = (input) => {
    const h = input.parentElement?.parentElement?.querySelector('.unit-hint');
    if (h) h.textContent = u ? 'mm' : 'in';
  };
  uI(sensorWidthInput);
  uI(sensorHeightInput);
  focalLengthUnit.textContent = u ? 'mm' : 'in';
  desiredGsdUnit.textContent = u ? 'cm/px' : 'in/px';
}
function updateSvgVisualization(fW, fH, fO) {
  if (fW <= 0 || fH <= 0) return;
  const sW = 220, sH = 100, s = Math.min((sW - 40) / fW, (sH - 40) / fW);
  const rW = Math.max(20, Math.min(160, fW * s));
  const rH = Math.max(10, Math.min(60, fH * s));
  const p1X = 20, p1Y = (sH - rH) / 2;
  const oW = rW * (fO / 100), p2X = p1X + rW - oW;
  photo1Rect.setAttribute('x', p1X.toString());
  photo1Rect.setAttribute('y', p1Y.toString());
  photo1Rect.setAttribute('width', rW.toString());
  photo1Rect.setAttribute('height', rH.toString());
  photo2Rect.setAttribute('x', p2X.toString());
  photo2Rect.setAttribute('y', p1Y.toString());
  photo2Rect.setAttribute('width', rW.toString());
  photo2Rect.setAttribute('height', rH.toString());
  overlapRect.setAttribute('x', p2X.toString());
  overlapRect.setAttribute('y', p1Y.toString());
  overlapRect.setAttribute('width', oW.toString());
  overlapRect.setAttribute('height', rH.toString());
  overlapText.setAttribute('x', (p2X + oW / 2).toString());
  overlapText.setAttribute('y', (p1Y + rH / 2 + 3).toString());
  overlapText.textContent = fO + '%';
}
function updateAlerts(g, fO, tS) {
  alertsContainer.innerHTML = '';
  if (g < 0.5) addAlert(ui.ultraHighResAlert || 'Ultra-high resolution');
  if (fO < 60) addAlert(ui.lowOverlapAlert || 'Forward overlap below 60%');
  if (tS > 5000) addAlert(ui.largeDatasetAlert || 'Large dataset');
}
function calculateMissionMetrics(fW, fO, lO, a) {
  const lN = Math.ceil(a / (fW * (1 - lO / 100)));
  const sM = fW * (1 - fO / 100);
  const sPL = Math.ceil(Math.sqrt(a) / sM);
  const tS = Math.ceil(sPL * lN);
  return [lN, sPL, tS, Math.ceil(tS * 2.5 / 60)];
}
function displayCoverage(p) {
  let c = p.w * p.h;
  if (currentUnit === 'imperial') c *= 10.764;
  areaDisplay.textContent = c.toFixed(0);
  let s = p.w * (1 - p.fwd / 100);
  if (currentUnit === 'imperial') s *= 3.28084;
  spacingDisplay.textContent = s.toFixed(1);
  const [l, , t, tm] = calculateMissionMetrics(p.w, p.fwd, p.lat, p.area);
  totalImages.textContent = t.toString();
  flightLines.textContent = l.toString();
  flightTime.textContent = tm.toString();
  dataVolume.textContent = (t * 20 / 1024).toFixed(1);
}
function parseNum(v, d) {
  const n = parseFloat(v);
  return Number.isNaN(n) ? d : n;
}
function getInputValues() {
  return {
    sensorW: parseNum(sensorWidthInput.value, 0),
    sensorH: parseNum(sensorHeightInput.value, 0),
    imgW: parseNum(imageWidthInput.value, 1),
    focal: parseNum(focalLengthInput.value, 1),
    fwd: parseNum(forwardOverlapInput.value, 0),
    lat: parseNum(lateralOverlapInput.value, 0),
    alt: parseNum(altitudeInput.value, 0),
    area: parseNum(missionAreaInput.value, 100),
  };
}
function calculate() {
  const v = getInputValues();
  const imp = currentUnit === 'imperial';
  const a = imp ? v.alt * 0.3048 : v.alt;
  const ar = imp ? v.area / 10.764 : v.area;
  const g = (a * v.sensorW) / (v.focal * v.imgW) * 100;
  gsdNumberLarge.textContent = g.toFixed(2);
  updatePrecisionScale(g);
  const fW = (a * v.sensorW) / v.focal;
  const fH = (a * v.sensorH) / v.focal;
  displayCoverage({ w: fW, h: fH, fwd: v.fwd, lat: v.lat, area: ar });
  updateSvgVisualization(fW, fH, v.fwd);
  const [, , t] = calculateMissionMetrics(fW, v.fwd, v.lat, ar);
  updateAlerts(g, v.fwd, t);
}
function updatePrecisionScale(g) {
  const cG = Math.max(0.5, Math.min(g, 20));
  const p = ((cG - 0.5) / 19.5) * 100;
  scaleFill.style.width = p + '%';
  let c = 'Unknown';
  if (g <= 2) c = ui.classHighPrecision || 'High';
  else if (g <= 5) c = ui.classStandard || 'Standard';
  else if (g <= 10) c = ui.classInspection || 'Inspection';
  else c = ui.classVisual || 'Visual';
  classificationBadge.textContent = c;
}
function addAlert(m) {
  const a = document.createElement('div');
  a.className = 'alert';
  a.textContent = m;
  alertsContainer.appendChild(a);
}
const cameraPresetSelect = document.getElementById('cameraPreset');
const sensorWidthInput = document.getElementById('sensorWidth');
const sensorHeightInput = document.getElementById('sensorHeight');
const imageWidthInput = document.getElementById('imageWidth');
const imageHeightInput = document.getElementById('imageHeight');
const focalLengthInput = document.getElementById('focalLength');
const altitudeInput = document.getElementById('altitudeAgl');
const altitudeSlider = document.getElementById('altitudeSlider');
const forwardOverlapInput = document.getElementById('forwardOverlap');
const lateralOverlapInput = document.getElementById('lateralOverlap');
const desiredGsdInput = document.getElementById('desiredGsd');
const missionAreaInput = document.getElementById('missionArea');
const gsdNumberLarge = document.getElementById('gsdNumberLarge');
const scaleFill = document.getElementById('scaleFill');
const classificationBadge = document.getElementById('classificationBadge');
const totalImages = document.getElementById('totalImages');
const flightLines = document.getElementById('flightLines');
const flightTime = document.getElementById('flightTime');
const dataVolume = document.getElementById('dataVolume');
const areaDisplay = document.getElementById('areaDisplay');
const spacingDisplay = document.getElementById('spacingDisplay');
const areaUnit = document.getElementById('areaUnit');
const spacingUnit = document.getElementById('spacingUnit');
const altUnit = document.getElementById('altUnit');
const areaInputUnit = document.getElementById('areaInputUnit');
const focalLengthUnit = document.getElementById('focalLengthUnit');
const desiredGsdUnit = document.getElementById('desiredGsdUnit');
const maxAltResult = document.getElementById('maxAltResult');
const gsdUnitLabel = document.getElementById('gsdUnitLabel');
const alertsContainer = document.getElementById('alertsContainer');
const photo1Rect = document.getElementById('photo1Rect');
const photo2Rect = document.getElementById('photo2Rect');
const overlapRect = document.getElementById('overlapRect');
const overlapText = document.getElementById('overlapText');
const metricBtn = document.getElementById('metricBtn');
const imperialBtn = document.getElementById('imperialBtn');
const resetBtn = document.getElementById('resetBtn');
const shareBtn = document.getElementById('shareBtn');
const exportBtn = document.getElementById('exportBtn');
altitudeInput.addEventListener('input', () => {
  altitudeSlider.value = altitudeInput.value;
  calculate();
  saveState();
});
altitudeSlider.addEventListener('input', () => {
  altitudeInput.value = altitudeSlider.value;
  calculate();
  saveState();
});
cameraPresetSelect.addEventListener('change', () => {
  const p = cameraPresets[cameraPresetSelect.value];
  if (p) {
    sensorWidthInput.value = p.sensorW;
    sensorHeightInput.value = p.sensorH;
    imageWidthInput.value = p.imgW;
    imageHeightInput.value = p.imgH;
    focalLengthInput.value = p.focal;
    calculate();
    saveState();
  }
});
[sensorWidthInput, sensorHeightInput, imageWidthInput, imageHeightInput, focalLengthInput, forwardOverlapInput, lateralOverlapInput, missionAreaInput].forEach(input => {
  input.addEventListener('input', () => {
    calculate();
    saveState();
  });
});
desiredGsdInput.addEventListener('input', () => {
  const sW = parseFloat(sensorWidthInput.value) || 0;
  const f = parseFloat(focalLengthInput.value) || 1;
  const iW = parseFloat(imageWidthInput.value) || 1;
  const dG = parseFloat(desiredGsdInput.value) || 1;
  const mA = (dG * f * iW) / (sW * 100);
  let aV = mA;
  if (currentUnit === 'imperial') aV = mA * 3.28084;
  altitudeInput.value = aV.toFixed(0);
  altitudeSlider.value = altitudeInput.value;
  const dA = currentUnit === 'metric' ? mA : mA * 3.28084;
  maxAltResult.textContent = dA.toFixed(2) + ' ' + (currentUnit === 'metric' ? 'm' : 'ft');
  calculate();
  saveState();
});
metricBtn.addEventListener('click', () => {
  if (currentUnit === 'metric') return;
  currentUnit = 'metric';
  metricBtn.classList.add('active');
  imperialBtn.classList.remove('active');
  sensorWidthInput.value = (parseFloat(sensorWidthInput.value) / 0.03937).toFixed(1);
  sensorHeightInput.value = (parseFloat(sensorHeightInput.value) / 0.03937).toFixed(1);
  altitudeInput.value = (parseFloat(altitudeInput.value) * 0.3048).toFixed(0);
  altitudeSlider.value = altitudeInput.value;
  altitudeInput.max = '500';
  altitudeSlider.max = '500';
  updateUnits();
  updateLabels();
  calculate();
  saveState();
});
imperialBtn.addEventListener('click', () => {
  if (currentUnit === 'imperial') return;
  currentUnit = 'imperial';
  imperialBtn.classList.add('active');
  metricBtn.classList.remove('active');
  sensorWidthInput.value = (parseFloat(sensorWidthInput.value) * 0.03937).toFixed(2);
  sensorHeightInput.value = (parseFloat(sensorHeightInput.value) * 0.03937).toFixed(2);
  altitudeInput.value = (parseFloat(altitudeInput.value) / 0.3048).toFixed(0);
  altitudeSlider.value = altitudeInput.value;
  altitudeInput.max = '1640';
  altitudeSlider.max = '1640';
  updateUnits();
  updateLabels();
  calculate();
  saveState();
});
resetBtn.addEventListener('click', () => location.reload());
shareBtn.addEventListener('click', async () => {
  const sU = getShareUrl();
  try {
    await navigator.clipboard.writeText(sU);
    const o = shareBtn.textContent;
    shareBtn.textContent = ui.copiedToClipboard || 'Copied!';
    setTimeout(() => {
      shareBtn.textContent = o;
    }, 2000);
  } catch {
    alert(sU);
  }
});
exportBtn.addEventListener('click', () => {
  const g = parseFloat(gsdNumberLarge.textContent || '0');
  const rT = `GSD\n${sensorWidthInput.value}x${sensorHeightInput.value}mm\n${imageWidthInput.value}x${imageHeightInput.value}px\nAlt: ${altitudeInput.value}${altUnit.textContent}\nGSD: ${g.toFixed(2)}\nArea: ${areaDisplay.textContent}\nImages: ${totalImages.textContent}\n${new Date().toLocaleString()}`;
  const b = new Blob([rT], { type: 'text/plain' });
  const u = URL.createObjectURL(b);
  const el = document.createElement('a');
  el.href = u;
  el.download = `gsd-${Date.now()}.txt`;
  el.click();
});
loadState();
calculate();
desiredGsdInput.dispatchEvent(new Event('input'));
