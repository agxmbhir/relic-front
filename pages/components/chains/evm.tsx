
import { Box, Stack, Input, Textarea} from "@mantine/core";

function Evm(props:any) {
  return (
    <Box>
      <Stack>
        <Input
          onChange={(input: any) => props.setContractAddress(input)}
          style={{ marginTop: "20px" }}
          placeholder="Contract Address"
        />
        <Input
        style={{ marginTop: "20px" }}
          onChange={(input: any) => props.setContractMethod(input)}
          placeholder="Contract Method"
        />
        <Textarea
        style={{ marginTop: "20px" }}
          onChange={(input: any) => props.setContractABI(input)}
          placeholder="Contract ABI"
        />
      </Stack>
    </Box>
  );
}
export default Evm;