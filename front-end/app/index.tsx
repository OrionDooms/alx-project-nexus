import { BACKGROUNDIMAGE, HEROLOGO } from "@/constants";
import { styles } from "@/styles/HomeStyle";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

import { ImageBackground, 
 View, Text, TouchableOpacity, 
 Image } from "react-native";

import { Background } from "@react-navigation/elements";

export default function index() {
  const router = useRouter();

  return (
    <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
            <ImageBackground
            source={BACKGROUNDIMAGE}
            style={styles.backgroundImageContainer}
            resizeMode="cover">
                
                <View style={styles.container}>
                   {/* <View style={styles.logoContainer}>
                        <Image source={HEROLOGO} />
                    </View>*/}
                    
                   <View style={styles.container}>
                        <Text style={styles.titleText}>SocialHub</Text>
                        <View style={styles.container}>
                        <Text style={styles.titleSubText}>Every post is a story.</Text>
                        <Text style={styles.titleSubText}>Every story deserves to be heard.</Text>
                    </View>
                  </View>

                     <View style={{ marginTop: 60, paddingHorizontal : 20}}>
                        <View style={styles.buttonGroup}>
                            <TouchableOpacity
                             style={styles.buttonPrimary}
                             onPress={() => router.push("/join")}>

                                <Text style={{...styles.buttonPrimaryText, color: "black" }}>Join here</Text>
                            </TouchableOpacity>
                            
                            <TouchableOpacity style={styles.buttonSecondary}
                             onPress={() => router.push("/signin")}>
                                <Text style={styles.buttonSecondaryText}>Sign In</Text>
                            </TouchableOpacity>
                        </View>
                        
                        <View style={styles.buttonGroupSubText}>
                            <Text onPress={() => router.push("/Post")} 
                            style={{...styles.buttonSecondaryText, color: "white"}}>Post
                            </Text>
                        </View>

                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    </SafeAreaProvider>
    );
}