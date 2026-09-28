// Standard packages
import React, { FC, useState } from 'react';

// Third-party packages
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import clsx from 'clsx';

// PropTypes
export type StepProp = {
  id: number; // Unique ID for each step
  label: string;
  content: React.ReactNode;
};
type StepperProps = {
  /** Stepper steps */
  steps: StepProp[];
  /** Initial selected tab ID */
  initialTab?: number;
  /** If 'true' lock initialTab */
  lock: boolean;
  /** Callback when a tab is selected */
  onSelect?: (id: number) => void;
};

const Stepper: FC<StepperProps> = (props: StepperProps) => {
  /** props - state */
  const { steps, initialTab, lock } = props;
  /** props - action */
  const { onSelect } = props;

  // State to manage selected tab
  const [selectedTab, setSelectedTab] = useState(
    initialTab ?? steps[0]?.id ?? 0
  );

  const handleTabChange = (index: number) => {
    const step = steps[index];
    if (step && !lock) {
      setSelectedTab(step.id); // Update selected tab state
      if (onSelect) {
        onSelect(step.id); // Trigger callback
      }
    }
  };

  // Find the index of the currently selected tab
  const selectedIndex = steps.findIndex(step => step.id === selectedTab);

  return (
    <div className='relative'>
      {/* Background Line */}
      <div className='w-full h-4 px-10 absolute z-0'>
        <div className='w-full h-[1px] bg-grayscale-200 relative top-1/2' />
      </div>
      <TabGroup
        selectedIndex={selectedIndex >= 0 ? selectedIndex : 0} // Default to the first tab if not found
        onChange={handleTabChange}
        className='relative z-1'
      >
        {/* Stepper Tabs */}
        <TabList className='flex gap-x-[41px]'>
          {steps.map(step => (
            <Tab key={step.id} className='outline-none'>
              {({ selected }) => (
                <div
                  className={clsx(
                    'flex flex-col items-center gap-y-2 cursor-pointer',
                    selected ? 'text-primary-300' : 'text-grayscale-400'
                  )}
                >
                  <span
                    className={clsx(
                      'w-4 h-4 rounded-full flex items-center justify-center text-[10px]',
                      selected
                        ? 'bg-primary-300 text-white'
                        : 'bg-grayscale-400 text-white'
                    )}
                  >
                    {step.id}
                  </span>
                  <span className='text-label-semibold px-[23.5px]'>
                    {step.label}
                  </span>
                </div>
              )}
            </Tab>
          ))}
        </TabList>

        {/* Stepper Content */}
        <TabPanels className='mt-4'>
          {steps.map(step => (
            <TabPanel key={step.id}>{step.content}</TabPanel>
          ))}
        </TabPanels>
      </TabGroup>
    </div>
  );
};

export default Stepper;
