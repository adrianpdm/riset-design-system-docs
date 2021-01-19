export default {
  title: 'Input Text',
  args: {
    label: 'Input Label',
    value: 'value of input text'
  },
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
    },
    value: {
      control: {
        type: 'text',
      }
    }
  },
}

export const Default = ({ label, value } = {}) => {
  const element = document.createElement('jds-input-text');
  
  // set prop values onto element
  Object.entries({
    label,
    value
  }).forEach(([propName, propValue]) => {
    element[propName] = propValue;
  });

  return element;
}
