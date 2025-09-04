export async function sendEstimateForm(formData: FormData) {
  const id = import.meta.env.VITE_FORMSPREE_ID;
  if (!id) throw new Error("Missing VITE_FORMSPREE_ID");
  const res = await fetch(`https://formspree.io/f/${id}`, {
    method: "POST",
    body: formData,
    headers: { Accept: "application/json" },
  });
  if (!res.ok) throw new Error("Failed to send");
  return res.json();
}
