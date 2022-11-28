import { Box, Button, Container, Flex, Link, Spacer, StackDivider, Text, VStack } from '@chakra-ui/react'
import React from 'react';



export default function SignInButton(){

    const [isLoading, setLoading] = React.useState(false);
    

    const handleSignIn = () => {
        
    }


    return (
        <VStack
            spacing={4}
            align='stretch'
        >
            <Button colorScheme='blue' isLoading={isLoading} onClick={handleSignIn}>Sign in</Button>
        </VStack>

        

    )


}