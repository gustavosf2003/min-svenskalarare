import { Listbox } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/24/outline";

export type DropdownProps = {
  items: any[];
  selectedItem: any;
  setSelectedItem: any;
};

const Dropdown = ({ items, selectedItem, setSelectedItem }: DropdownProps) => {
  return (
    <div className="relative w-40">
      <Listbox value={selectedItem} onChange={setSelectedItem}>
        <Listbox.Button className="relative w-full cursor-pointer rounded bg-[#2F2F2F] shadow-md focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm flex items-center gap-2 px-2 py-2">
          <span className="text-xl">{selectedItem.icon}</span>
          {selectedItem.language}
          <span className="absolute right-2">
            <ChevronUpDownIcon color="white" width={18}></ChevronUpDownIcon>
          </span>
        </Listbox.Button>
        <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-[#2F2F2F] py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
          {items.map((item) => (
            <Listbox.Option
              className="hover:bg-basePrimary flex items-center gap-2 px-2 cursor-pointer py-1"
              key={item.icon}
              value={item}
            >
              <span className="text-xl">{item.icon}</span>
              {item.language}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
};

export default Dropdown;
