import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
} from "../slices/couterSlice";
import { IconButton, HStack, Heading, Center, VStack } from "@chakra-ui/react";
import Counter from "../components/counter";
import AddAmount from "../components/addamount";
import Image from "next/image";
import Head from "next/head";

function Index() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <Head>
        <title>redux counting application</title>
        <meta name='description' content='a redux counting application simple and fun' />
      </Head>
      <Center height="100vh">
        <VStack spacing="15px">
          <Image src="/redux.png" alt="logo" width="100px" height="100px" />
          <Counter
            dispatch={dispatch}
            increment={increment}
            decrement={decrement}
            count={count}
          />
          <AddAmount
            dispatch={dispatch}
            incrementByAmount={incrementByAmount}
            decrementByAmount={decrementByAmount}
            count={count}
          />
        </VStack>
      </Center>
    </>
  );
}

export default Index;
