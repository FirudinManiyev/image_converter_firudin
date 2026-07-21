# AI Development Guidelines

When working on this project, the AI assistant should follow these principles:

## Project context

- This app handles image conversion, previewing, and downloading.
- Most operations run in the browser; there is no server-side processing.
- The UI is primarily dark, modern, and minimal.

## Technical priorities

- Follow the React + TypeScript patterns already used in the codebase.
- Keep image-processing logic inside the service layer.
- Prefer type-safe code and clear component boundaries.
- Add proper error handling and user feedback such as toasts and placeholders.

## Design and UX guidelines

- Keep the user experience simple and fast.
- Provide clear feedback during actions.
- Make any new UI components fit the existing dark theme and card-based layout.

## Code standards

- Organize files logically by responsibility: components, hooks, services, types, and utils.
- Follow the existing patterns before introducing new ones.
- Run npm run build and npm run lint after meaningful changes.

## Most important advice

- Pay attention to URL object creation and cleanup during image handling.
- Keep canvas-based image processing efficient and memory-conscious.
- Prefer extending existing components over creating entirely new structures for small features.
