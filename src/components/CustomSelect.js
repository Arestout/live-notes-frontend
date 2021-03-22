import React from 'react';
import Select from 'react-select';

const categories = [
  { value: 'All', label: 'Все дневники' },
  { value: 'Auto', label: 'Автомобили' },
  { value: 'Home', label: 'Дом' },
  { value: 'Animals', label: 'Животные' },
  { value: 'Beauty', label: 'Красота' },
  { value: 'Travel', label: 'Путешествия' },
  { value: 'Plants', label: 'Растения' },
  { value: 'Family', label: 'Семья' },
  { value: 'Technique', label: 'Техника' },
];

function CustomSelect() {
  return (
    <div className="Categories__filter">
      <Select options={categories} defaultValue={categories[0]} />
    </div>
  );
}

export default CustomSelect;
