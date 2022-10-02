import { Input, HStack, Button } from "@chakra-ui/react";
import { useState } from "react";

function AddAmount({ incrementByAmount, dispatch, count, decrementByAmount }) {
  const [amount, setAmount] = useState(0);
  return (
    <HStack>
      <Input
        width="100px"
        borderColor="black"
        borderRadius="none"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <Button
        colorScheme="teal"
        borderRadius="none"
        onClick={() => dispatch(incrementByAmount(parseInt(amount)))}
      >
        Add Amount
      </Button>
      <Button
        colorScheme="blackAlpha"
        borderRadius="none"
        onClick={() => dispatch(decrementByAmount(parseInt(amount)))}
      >
        Sub Amount
      </Button>
    </HStack>
  );
}

export default AddAmount;
