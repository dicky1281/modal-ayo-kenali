import { createApp, h } from "vue";
import MyModal from "./MyModal.vue";

export async function showModal({ apiKey, data, onConfirm }) {
  const isValid = await validateApiKey(apiKey);
  if (!isValid) {
    alert("API Key tidak valid!");
    return;
  }

  const container = document.createElement("div");
  document.body.appendChild(container);

  const close = () => {
    app.unmount();
    document.body.removeChild(container);
  };

  const app = createApp({
    render() {
      return h(MyModal, {
        data,
        onConfirm: () => {
          onConfirm?.();
          close();
        },
        onClose: close,
      });
    },
  });

  app.mount(container);
}

async function validateApiKey(apiKey) {
  try {
    console.log("test");
  } catch {
    return false;
  }
}
