import { BACKGROUNDIMAGE, HEROLOGO } from "@/constants";
import { styles } from "@/styles/HomeStyle";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

import { ImageBackground, 
 View, Text, TouchableOpacity, 
 Image } from "react-native";

import { Background } from "@react-navigation/elements";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
            {/* Background Image */}
            <ImageBackground
            source={BACKGROUNDIMAGE}
            style={styles.backgroundImageContainer}
            resizeMode="cover">
                
                   <View style={styles.titleContainer}>
                    {/* Title Section */}
                        <Text style={styles.titleText}>SocialHub</Text>
                        <Text style={styles.titleSubText}>Every post is a story.</Text>
                        <Text style={styles.titleSubText}>Every story deserves to be heard.</Text>
                         {/* Logo Section */}
                    <View style={styles.logoContainer}>
                        <Image source={HEROLOGO} />
                    </View>
                    </View>                                     

                    {/* Button Section */}
                     <View>
                        <View style={styles.buttonGroup}>

                            {/* Join Button */}
                            <TouchableOpacity
                             style={styles.buttonPrimary}
                             onPress={() => router.push("/join")}
                             >
                                <Text style={styles.buttonPrimaryText}>Join here</Text>
                            </TouchableOpacity>

                            {/* Sign In Button */}                            
                            <TouchableOpacity style={styles.buttonSecondary}
                             onPress={() => router.push("/signin")}
                             >
                                <Text style={styles.buttonSecondaryText}>Sign In</Text>
                            </TouchableOpacity>
                       
                        
                        <TouchableOpacity style={styles.buttonGroupSubText}>
                            <Text onPress={() => router.push("/Post")} 
                            style={{...styles.buttonSecondaryText, color: "white"}}>Post
                            </Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    </SafeAreaProvider>
    );
}