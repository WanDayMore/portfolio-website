// src/assets/drawPixelHero.js

/**
 * Draws a single frame of the 8-bit hero sprite onto a canvas context.
 * @param {HTMLCanvasElement} canvas 
 * @param {number} frame Current frame count for idle animation
 */
export const pixelHero = (canvas, frame) => {
  if (!canvas) return;
  
  const ctx = canvas.getContext("2d");
  ctx.imageSmoothingEnabled = false; // Sharp pixel edges

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  const scale = 4;
  const offsetY = Math.sin(frame * 0.1) * 2; // Idle floating bounce

  // Hood / Head
  ctx.fillStyle = "#3b82f6";
  ctx.fillRect(8 * scale, (4 + offsetY) * scale, 8 * scale, 8 * scale);

  // Visor
  ctx.fillStyle = "#fde047";
  ctx.fillRect(10 * scale, (7 + offsetY) * scale, 5 * scale, 2 * scale);

  // Robe Body
  ctx.fillStyle = "#1e3a8a";
  ctx.fillRect(7 * scale, (12 + offsetY) * scale, 10 * scale, 10 * scale);

  // Staff / Sword
  ctx.fillStyle = "#a855f7";
  ctx.fillRect(18 * scale, (6 + offsetY) * scale, 2 * scale, 14 * scale);
  ctx.fillStyle = "#e9d5ff";
  ctx.fillRect(17 * scale, (4 + offsetY) * scale, 4 * scale, 2 * scale);
};