
window.requestAnimationFrame(main); // 1.
//what does this do?
//The `window.requestAnimationFrame(main)` function call is used in JavaScript to schedule the execution of the `main` function for the next repaint of the
//browser window. It's commonly used in animations and other tasks that require smooth performance because it synchronizes with the browser's rendering loop.
//This approach helps optimize animations by ensuring updates occur right before the browser repaints, thus avoiding unnecessary redraws and improving efficiency.

//2.
//what is the meaning of repaints here?
//In the context of `requestAnimationFrame`, **repaint** refers to the process where the browser redraws pixels on the screen to reflect any visual changes in
//the webpage, such as color updates, visibility changes, or modifications in CSS styles (like background-color changes).  

//However, a **repaint** is different from a **reflow (layout recalculation)**:  
//- **Repaint**: Happens when only visual aspects change without affecting the layout (e.g., color change).  
//- **Reflow (layout update)**: Happens when changes affect element positions, dimensions, or the overall document structure (e.g., changing the width of a div).  

//Since `requestAnimationFrame` synchronizes animations with the browser’s refresh cycle (usually 60 FPS), it ensures smooth updates without unnecessary repaints or reflows, 
//improving performance.

//3.
//why is requestAnimationFrame better than setTimeOut or setInterval?
//`requestAnimationFrame` is better than `setTimeout` or `setInterval` for animations because it is more efficient and provides smoother performance. Here’s why:  

// 1. **Synchronizes with Screen Refresh Rate**  
  // - `requestAnimationFrame` runs just before the next repaint (typically 60 FPS or every ~16.67ms on a 60Hz screen).  
   //- `setTimeout` and `setInterval` are not synchronized with the screen refresh rate, which can lead to **frame drops or stuttering**.  

//2. **Prevents Unnecessary Updates (Power Efficiency)**  
  // - If a browser tab is not visible, `requestAnimationFrame` **pauses automatically**, preventing CPU and GPU usage.  
   //- `setTimeout` and `setInterval` keep running **even when the tab is inactive**, wasting resources.  

//3. **Better Frame Rate Control**  
  // - `requestAnimationFrame` ensures that updates happen **only when needed**, avoiding skipped or duplicated frames.  
   //- `setTimeout(fn, 16)` or `setInterval(fn, 16)` might not match the actual refresh cycle, causing **jittery animations**.  

//4. **Smoother Animations**  
  // - Since `requestAnimationFrame` aligns updates with the browser's rendering pipeline, it reduces **tearing and flickering**.  
   //- `setTimeout` and `setInterval` can result in uneven frame pacing.  

//**When to Use What?**  
//✅ **Use `requestAnimationFrame` for animations** (e.g., moving objects, smooth scrolling, game loops).  
//❌ **Avoid `setTimeout`/`setInterval` for animations** (they're better for delays, polling, or periodic tasks).  

//4.
//What is FPS?
//**FPS (Frames Per Second)** is a measure of how many images (frames) a display or animation can render per second. It determines how smooth motion
//appears on a screen.  

//🔹 **How FPS Affects Smoothness**  
//- **60 FPS** (standard for most screens) → Smooth animations, fluid motion  
//- **30 FPS** → Slightly choppy, but acceptable in some cases  
//- **Below 30 FPS** → Noticeable lag, stuttering animations  
//- **120+ FPS** → Ultra-smooth, used in high-refresh-rate monitors  

//🔹 **FPS in `requestAnimationFrame`**  
//Since most screens refresh at **60Hz** (60 times per second), the browser tries to **match animations to 60 FPS** when using `requestAnimationFrame`.
//This means the function runs roughly every **16.67 milliseconds** (1 second ÷ 60 = 16.67ms).  

//If you use `setTimeout(fn, 16)`, it might not sync perfectly with the screen refresh, leading to **inconsistent frame pacing** and stutters.  

//5.
//How can we decrease/control FPS?

