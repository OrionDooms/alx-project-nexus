import { Text, TextInput, View, TouchableOpacity, Image, ScrollView } from "react-native";
import { styles } from "@/styles/_joinstyle";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { HEROLOGO, GOOGLELOGO, FACEBOOKLOGO, HEROLOGOGREEN } from "@/constants";
import { useRouter } from "expo-router";

export default function SignIn() {
    const router = useRouter();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 20 }}
        showsVerticalScrollIndicator={false}>

          <View>
        <View style={styles.iconsection}>
          <Ionicons name="arrow-back" size={25} onPress={() => router.back()} />
          {/*<Image source={HEROLOGOGREEN} style={{ tintColor: "#009966" }}/>*/}
        </View>

        <View style={styles.titleTextGroup}>
        <Text style={styles.titleText}>Sign in to your Account</Text>
        <Text style={styles.subText}>
          Enter your email and password to sign in.
        </Text>
        </View>

        <View style={styles.formGroup}>
          <View>
            <Text style={styles.formLabel}>Email</Text>
            <TextInput
            keyboardType="email-address" 
            style={styles.formControl}/>
          </View>


          <View>
            <Text style={styles.formLabel}>Password</Text>
            <View style={styles.formPasswordControl}>
              <TextInput
              style={styles.passwordControl}
              secureTextEntry/>
              <FontAwesome name="eye-slash" size={24} color="#B6FF00FF" />
            </View>
          </View>

          <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        </View>

        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.buttonText}>Create</Text>
        </TouchableOpacity>

        <View>
          <Text style={styles.signupTitleText}>Don't have an account?</Text>
          <Text style={[styles.signupTitleText, { color: "orange",
          fontWeight: "600" }]} onPress={() => router.push("/join")}>Join now</Text>
        </View>
        </View>
          </ScrollView>
        </SafeAreaView>
    </SafeAreaProvider>
  )
}