import { useState } from "react";
import { Container, Text, VStack, Button, Input, HStack, Box, IconButton } from "@chakra-ui/react";
import { FaRocket, FaTrash } from "react-icons/fa";

const Index = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, isUser: true }]);
      setInput("");
    }
  };

  const handleDelete = (index) => {
    setMessages(messages.filter((_, i) => i !== index));
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl">Your Blank Canvas</Text>
        <Text>Chat with the agent to start making edits.</Text>
        <VStack spacing={3} width="100%" maxH="60vh" overflowY="auto" border="1px solid" borderColor="gray.200" borderRadius="md" p={4}>
          {messages.map((message, index) => (
            <HStack key={index} justifyContent={message.isUser ? "flex-end" : "flex-start"} width="100%">
              <Box bg={message.isUser ? "blue.100" : "gray.100"} p={2} borderRadius="md" maxWidth="70%">
                <Text>{message.text}</Text>
              </Box>
              <IconButton aria-label="Delete message" icon={<FaTrash />} size="sm" onClick={() => handleDelete(index)} />
            </HStack>
          ))}
        </VStack>
        <HStack width="100%">
          <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type your message..." />
          <Button onClick={handleSend} rightIcon={<FaRocket />}>
            Send
          </Button>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
