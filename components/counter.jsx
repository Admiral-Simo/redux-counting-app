import { IconButton, HStack, Heading } from "@chakra-ui/react";
import { BiPlus, BiMinus } from "react-icons/bi";

function Counter({ dispatch, increment, decrement, count }) {
  return (
    <HStack spacing="25px">
      <IconButton
        borderRadius="none"
        colorScheme="purple"
        aria-label="increment"
        icon={<BiPlus />}
        onClick={() => dispatch(increment())}
      />
      <Heading fontWeight={200}>{count}</Heading>
      <IconButton
        borderRadius="none"
        colorScheme="purple"
        aria-label="decrement"
        icon={<BiMinus />}
        onClick={() => dispatch(decrement())}
      />
    </HStack>
  );
}

export default Counter;
