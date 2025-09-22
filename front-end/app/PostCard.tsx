import { PostData } from "@/interfaces/index";
import { styles } from "@/styles/index";
import { Text, View, TouchableOpacity } from "react-native";

interface PostCardProps extends PostData {}

const PostCard: React.FC<PostCardProps> = ({ id, title, body, userId }) => {
  return (
    <View style={styles.postCard}>
      <Text style={styles.postTitle}>{title}</Text>
      <Text style={styles.postBody}>{body}</Text>
    <View style={styles.postActions}>
      <TouchableOpacity>
        <Text style={styles.actionText}>Like</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.actionText}>Comment</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.actionText}>Share</Text>
      </TouchableOpacity>
    </View>
  </View>
  );
};

export default PostCard;