// vite.config.ts
import react from "file:///D:/CODE/S-Trip%20FE/capstone/node_modules/@vitejs/plugin-react-swc/index.mjs";
import * as path from "path";
import { defineConfig, loadEnv } from "file:///D:/CODE/S-Trip%20FE/capstone/node_modules/vite/dist/node/index.js";
var __vite_injected_original_dirname = "D:\\CODE\\S-Trip FE\\capstone";
var vite_config_default = ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return defineConfig({
    plugins: [react()],
    resolve: {
      alias: [{ find: "@", replacement: path.resolve(__vite_injected_original_dirname, "src") }]
    },
    server: {
      port: parseInt(process.env.VITE_PORT)
    }
  });
};
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxDT0RFXFxcXFMtVHJpcCBGRVxcXFxjYXBzdG9uZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcQ09ERVxcXFxTLVRyaXAgRkVcXFxcY2Fwc3RvbmVcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L0NPREUvUy1UcmlwJTIwRkUvY2Fwc3RvbmUvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3Qtc3djJztcclxuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJztcclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnLCBsb2FkRW52IH0gZnJvbSAndml0ZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoeyBtb2RlIH0pID0+IHtcclxuICBwcm9jZXNzLmVudiA9IHsgLi4ucHJvY2Vzcy5lbnYsIC4uLmxvYWRFbnYobW9kZSwgcHJvY2Vzcy5jd2QoKSkgfTtcclxuXHJcbiAgLy8gaW1wb3J0Lm1ldGEuZW52LlZJVEVfUE9SVCBhdmFpbGFibGUgaGVyZSB3aXRoOiBwcm9jZXNzLmVudi5WSVRFX1BPUlRcclxuICByZXR1cm4gZGVmaW5lQ29uZmlnKHtcclxuICAgIHBsdWdpbnM6IFtyZWFjdCgpXSxcclxuICAgIHJlc29sdmU6IHtcclxuICAgICAgYWxpYXM6IFt7IGZpbmQ6ICdAJywgcmVwbGFjZW1lbnQ6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMnKSB9XSxcclxuICAgIH0sXHJcbiAgICBzZXJ2ZXI6IHtcclxuICAgICAgcG9ydDogcGFyc2VJbnQocHJvY2Vzcy5lbnYuVklURV9QT1JUKSxcclxuICAgIH0sXHJcbiAgfSk7XHJcbn07XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBMFEsT0FBTyxXQUFXO0FBQzVSLFlBQVksVUFBVTtBQUN0QixTQUFTLGNBQWMsZUFBZTtBQUZ0QyxJQUFNLG1DQUFtQztBQUl6QyxJQUFPLHNCQUFRLENBQUMsRUFBRSxLQUFLLE1BQU07QUFDM0IsVUFBUSxNQUFNLEVBQUUsR0FBRyxRQUFRLEtBQUssR0FBRyxRQUFRLE1BQU0sUUFBUSxJQUFJLENBQUMsRUFBRTtBQUdoRSxTQUFPLGFBQWE7QUFBQSxJQUNsQixTQUFTLENBQUMsTUFBTSxDQUFDO0FBQUEsSUFDakIsU0FBUztBQUFBLE1BQ1AsT0FBTyxDQUFDLEVBQUUsTUFBTSxLQUFLLGFBQWtCLGFBQVEsa0NBQVcsS0FBSyxFQUFFLENBQUM7QUFBQSxJQUNwRTtBQUFBLElBQ0EsUUFBUTtBQUFBLE1BQ04sTUFBTSxTQUFTLFFBQVEsSUFBSSxTQUFTO0FBQUEsSUFDdEM7QUFBQSxFQUNGLENBQUM7QUFDSDsiLAogICJuYW1lcyI6IFtdCn0K
