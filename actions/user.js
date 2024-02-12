import useSWR from "swr";
import { fetcher } from "@/actions";
// export const useGetUser = () => {
//   console.log('useGetUser hook called');
//   const { data, error, ...rest } = useSWR('/api/v1/me', async (url) => {
//     console.log("I AM HERE");
//     const data = await fetcher(url);
//     const res = await fetch(`/api/v1/roles?email=${data.email}`);
//     const roles = await res.json();
//     console.log(roles);
//     return { ...data, ...roles }
//   });
//   return { data, error, loading: !data && !error, ...rest };

// }
export const useGetUser = () => {
  const { data, error, ...rest} = useSWR('/api/v1/me', fetcher);
  return { data, error, loading: !data && !error, ...rest};
}

