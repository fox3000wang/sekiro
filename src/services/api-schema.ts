export function getVisaInfo() {
  return (body: any) => ({
    method: "post",
    //method: "get",
    path: "graphql?query={data}",

    name: "data",
    payload: body
  });
}
