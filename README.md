
# Key Features

## 1. MeshPortalMaterial

The MeshPortalMaterial is a core feature of this scene. It allows creating portal effects on 3D objects, offering the ability to view content inside them. In this project, the MeshPortalMaterial is applied to a RoundedBox, which serves as the portal. Upon double-clicking on this portal, the activation state toggles, enabling the user to "enter" the portal and view the internal content.

# Key Properties Utilized:

blend: Controls the blending effect of the portal, smoothly transitioning between activation and deactivation states.

side: Defines the side of the material to be rendered, in this case, configured as THREE.BackSide to apply the texture on the internal side of the portal.

2. User Interaction

In addition to the portal effect, the scene also includes user interaction. Upon double-clicking on the portal, the activation state toggles, allowing the user to enter and exit the portal.

4. Camera Control
   
Camera control is implemented using CameraControls from the @react-three/drei package. It allows the user to interact with the scene, moving and rotating the camera to explore different angles.

Running the Project Locally

To run this project locally, follow these steps:

Clone the repository:
bash
Copy code
git clone https://github.com/your-username/repository-name.git
Install dependencies:
bash
Copy code
cd repository-name
npm install
Start the development server:
sql
Copy code
npm start
The project will be available at http://localhost:3000.

# Technologies Used
React
Three.js
@react-three/drei
easing (easing library for smooth animations)
