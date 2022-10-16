import {useState } from 'react'
import { Button, Group, Box, Title, Grid, NativeSelect } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons";
import Trigger from './components/trigger';
import Task from './components/task';
import { postEvm, postSonr } from './api/hello';

export default function IndexPage() {
  const [triggerSelected, setTriggerSelected] = useState("");
  const [actionSelected, setActionSelected] = useState("");
  const [chain, setChain] = useState("");
  const [contractAddress, setContractAddress] = useState("");
  const [contractMethod, setContractMethod] = useState("");
  const [contractABI, setContractABI] = useState("");
  const [apiEndpoint, setApiEndpoint] = useState("");
  const [apiMethod, setApiMethod] = useState("");
  const [sonrTask, setSonrTask] = useState("");
  const [aliasAddress, setAliasAddress] = useState("");
  return (
    <Box style={{padding: "100px"}}>
      <Title>Relic</Title>
      <Grid gutter={"md"} style={{ marginTop: "20px" }}>
        <Grid.Col span={4}>
          {/*  Menu item with a list of if */}
          <NativeSelect
            label="Keep an Eye on this..."
            placeholder="Select Trigger"
            data={['Method Call', 'Event Emitted', 'Balance Monitor']}
            value={triggerSelected}
            onChange={(event) => setTriggerSelected(event.currentTarget.value)}
            rightSection={<IconChevronDown size={14} />}
            rightSectionWidth={40}
          />
        </Grid.Col>
        <Grid.Col span={4}>
          {/*  Menu item with a list of if */}
          <NativeSelect
            label="...and do this"
            placeholder="Select Action"
            data={['API Trigger', 'Contract Call']}
            value={actionSelected}
            onChange={(event) => setActionSelected(event.currentTarget.value)}
            rightSection={<IconChevronDown size={14} />}
            rightSectionWidth={40}
          />
        </Grid.Col>
      </Grid>
      {/*  Display an equally spaced grid with trigger and action components from components folder*/}
      {triggerSelected && actionSelected && (
        <Box>
          <Grid gutter={"md"}  style={{ marginTop: "20px" }}>
            <Grid.Col span={4}>
              <Trigger
                setChain={setChain}
                setContractAddress={setContractAddress}
                setContractMethod={setContractMethod}
                setContractABI={setContractABI}
                setSonrTask={setSonrTask}
                sonrTask={sonrTask}
                sonrAlias={aliasAddress}
                setSonrAlias={setAliasAddress}
                chain={chain}
              />
            </Grid.Col>
            <Grid.Col span={4}>
              <Task
                setApiEndpoint={setApiEndpoint}
                setApiMethod={setApiMethod}
                method={apiMethod}
              />
            </Grid.Col>
          </Grid>
          {chain &&
            contractAddress &&
            contractMethod &&
            contractABI &&
            apiEndpoint &&
            apiMethod && (
                <Button
                style={{width:"70%", marginTop: "20px" , backgroundColor: "linear(to-l, #7928CA, #FF0080)" }}
                  onClick={() => {
                    console.log({
                      chain: chain,
                      address: contractAddress,
                      event_name: contractMethod,
                      abi_endpoint: contractABI,
                      abi : contractABI,
                    });
                    postEvm({
                      chain: chain,
                      address: contractAddress,
                      event_name: contractMethod,
                      abi_endpoint: contractABI,
                      abi : contractABI,
                    })
                   } 
                  }
                >
                  Deploy!
                </Button>
            )}
          {chain && apiEndpoint && apiMethod && sonrTask && (
              <Button
               
                style={{marginTop: "20px" , width:"70%",  backgroundColor: "linear(to-l, #7928CA, #FF0080)" }}
                
                onClick={() => {
                  {
                    console.log({
                      alias: aliasAddress,
                      api_endpoint: apiEndpoint,
                    })
                    postSonr({
                      alias: aliasAddress,
                      api_endpoint: apiEndpoint,
                    })
                  }
                }}
              >
                Deploy!
              </Button>
          )}

        </Box>
      )}
    </Box>
  );
}
