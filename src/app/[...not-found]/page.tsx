import Error from "@/components/error";
import Wrapper from "@/layouts/Wrapper";


export const metadata = {
  title: "Interno 404 || error - Architecture & Interior Next js Template",
};



const index = () => {
  return (
    <Wrapper>
      <Error />
    </Wrapper>
  );
};

export default index;