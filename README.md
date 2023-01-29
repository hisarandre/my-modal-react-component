# Modal - React Component

![Author](https://img.shields.io/badge/Author-hisarandre-")
![GitHub repo size](https://img.shields.io/github/repo-size/hisarandre/my-modal-react-component)
![GitHub top language](https://img.shields.io/github/languages/top/hisarandre/my-modal-react-component)
![GitHub language count](https://img.shields.io/github/languages/count/hisarandre/my-modal-react-component)

## General information

An easy-friendly Modal component for React.

## Prerequisites

- A text editor`
- [Node.js < v.16](https://nodejs.org/en/)
- [Git](https://git-scm.com/)

## Modal Component

- `message` : {string} the message in the modal
- `modalColor`: {string} the color value of the modal
- `bgColor`: {string} the color value of the background
- `btnColor`: {string} the color value of the close button
- `size`: {"sm", "md", "lg", "fit"} correspond to the modal width, padding and button size
- `corner`: {string} correspond to the border-radius of the modal
- `justify`: {string} justify-content of the text inside the modal
- `open`: {boolean} show the modal if set as true
- `close`: {function} a function that should be used with useState to change `open` as true or false

## Exemple

```javascript
const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpenModal() {
    setIsOpen(true);
  }

  return (
    <>
      <button type="button" onClick={handleOpenModal}>
        Close
      </button>

      <Modal
        message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mattis lacus quis metus tempus aliquam. Cras a nulla aliquet, sodales leo vel, molestie ex. Suspendisse ornare sapien nec efficitur tincidunt. Sed dignissim felis in tortor hendrerit viverra."
        open={isOpen}
        close={() => setIsOpen(!isOpen)}
      />
    </>
  );
};

export default App;
```
