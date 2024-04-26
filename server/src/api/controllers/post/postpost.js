// Import the Post model (assuming it's defined elsewhere)
import { Post } from '../../../models/index.js';

// Define the controller function to handle posting new items
export default async (req, res) => {
  try {
    // Extract the necessary data from the request body
    const { image, description, seller, numberOfLikes } = req.body;

    // Create a new post object based on the PostSchema
    const newPost = new Post({
      image: image || 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png', // Default image if not provided
      description,
      seller,
      numberOfLikes: numberOfLikes || 0, // Default number of likes if not provided
    });

    // Save the new post to the database
    const savedPost = await newPost.save();

    // Respond with the saved post object
    res.status(201).json(savedPost);
  } catch (error) {
    // Handle any errors that occur during the creation of the post
    console.error('Error creating post:', error);
    res.status(500).json({ error: 'An error occurred while creating the post.' });
  }
};

