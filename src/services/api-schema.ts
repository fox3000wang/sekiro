export function getVisaInfo() {
  return (body: any) => ({
    method: "get",
    path: "vita",
    name: "data",
    payload: body
  });
}
