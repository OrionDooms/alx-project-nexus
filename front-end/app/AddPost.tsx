import {useState} from 'react';
import { View, Text, TouchableOpacity, Modal, TextInput } from "react-native";
import { PostData } from "@/interfaces/index";
import { styles } from "@/styles/_Addpost";

interface AddPostProps {
  onAdd: (post: PostData) => void;
  currentCount: number; // To generate a new ID
}

const AddPost: React.FC<AddPostProps> = ({ onAdd, currentCount }) => (
    (() => {
        const [isModalVisible, setModalVisible] = useState(false); // isModalVisible controls the pop-up form visibility
        const [newTitle, setNewTitle] = useState(''); // State for the new post title
        const [newBody, setNewBody] = useState(''); // State for the new post body

        // Add new post handler
        const handleAddPost = () => {
            if (!newTitle.trim() || !newBody.trim()) // Prevent adding empty posts
                return;

            const newPost: PostData = {
                id: currentCount + 1, // Generate a new ID
                userId: 1,            // Assuming a default userId of 1
                title: newTitle,
                body: newBody,
            };

            onAdd(newPost);         // Send post back to parent component
            setModalVisible(false); // Close modal
            setNewTitle('');        // Reset fields
            setNewBody('');
        };

        return (
            <>
                {/* Render Buttons */}
                <TouchableOpacity style={styles.fab}
                    onPress={() => setModalVisible(true)}>
                    <Text style={styles.fabText}>Add</Text>
                </TouchableOpacity>

                {/* Modal */}
                <Modal
                    visible={isModalVisible}
                    transparent
                    animationType="slide"
                    onRequestClose={() => setModalVisible(false)}
                >
                    <View style={styles.modalOverlay}>
                        <View style={styles.modalContent}>
                            <Text style={styles.modalTitle}>Create Post</Text>

                            {/* Title Input */}
                            <TextInput
                                style={styles.input}
                                placeholder="Title"
                                placeholderTextColor={"#888"}
                                value={newTitle}
                                onChangeText={setNewTitle} />

                            {/* Body Input */}
                            <TextInput
                                style={[styles.input, styles.textArea]}
                                placeholder="What's on your mind?"
                                placeholderTextColor={"#888"}
                                multiline
                                numberOfLines={4}
                                value={newBody}
                                onChangeText={setNewBody}
                            />

                            {/* Post Button */}
                            <TouchableOpacity style={styles.modalButtons} onPress={handleAddPost}>
                                <Text style={styles.modalButtonText}>Post</Text>
                            </TouchableOpacity>

                            {/* Cancel Button */}
                            <TouchableOpacity onPress={() => setModalVisible(false)}>
                                <Text style={styles.cancelText}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </>
        );
    })()
);

export default AddPost;