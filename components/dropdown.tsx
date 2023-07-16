import { Select } from '@mantine/core';

const Dropdown = () => {
  return (
    <div>
      <Select
        label="Your favorite framework/library"
        placeholder="Pick one"
        data={[
          { value: 'react', label: 'React' },
          { value: 'ng', label: 'Angular' },
          { value: 'svelte', label: 'Svelte' },
          { value: 'vue', label: 'Vue' },
        ]}
      />
    </div>
  );
};

export default Dropdown;
