import { axiosInstance } from "./fetcher";

export const createProduct = async (
  url: string,
  { arg }: { arg: { title: string } }
) => {
  await axiosInstance.post(url, {title : arg.title} );
};
