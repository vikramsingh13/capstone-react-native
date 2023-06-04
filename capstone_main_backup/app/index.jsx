import { Redirect } from "expo-router";
import { Amplify, Auth } from "aws-amplify";
import awsmobile from "../src/aws-exports";
import { View, Text, Pressable, SafeAreaView, StyleSheet } from "react-native";
import {
    withAuthenticator,
    useAuthenticator,
} from "@aws-amplify/ui-react-native";

Amplify.configure(awsmobile);

// retrieves only the current value of 'user' from 'useAuthenticator'
const userSelector = (context) => [context.user]

const SignOutButton = () => {
  const { user, signOut } = useAuthenticator(userSelector);

  console.log("User email:", user.attributes.email);
  console.log("User username:", user.username);

  return (
    <Pressable onPress={signOut} style={styles.buttonContainer}>
      <Text style={styles.buttonText}>Hello, {user.attributes.email}! Click here to sign out!</Text>
    </Pressable>
  )
};

const Index = () => {
    //comment this when login is enabled instead
    return <Redirect href="/home" />;
    
    //commented login to speed up testing
    /*return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <SignOutButton />
            </View>
        </SafeAreaView>
            
    );*/
};

//commented login to speed up testing
//export default withAuthenticator(Index);
export default Index;

const styles = StyleSheet.create({
    container: {width: 400, flex: 1, padding: 20, alignSelf: 'center'},
    todo: {marginBottom: 15},
    input: {backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18},
    todoName: {fontSize: 20, fontWeight: 'bold'},
    buttonContainer: {
      alignSelf: 'center',
      backgroundColor: 'black',
      paddingHorizontal: 8,
    },
    buttonText: {color: 'white', padding: 16, fontSize: 18},
  });
