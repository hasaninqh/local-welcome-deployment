import { Button } from 'reactstrap';
import React from 'react';
import data from '../data/tableSetting.json';
const activeAndCompletedClasses = (id, currentStep) => {
  if (id >= currentStep) {
    return 'active-class info';
  } else if (id < currentStep) {
    return 'completed-class info';
  }
};
const TableSettingPagination = props => {
  return data.map((item, indexKey) => (
    <Button
      onClick={() => props.setCurrentStep(props.visitToStep || item.id)}
      value={item.id}
      className={activeAndCompletedClasses(item.id, props.currentStep)}
      disabled={item.id > props.currentStep}
      key={indexKey}
    >
      {item.id}
    </Button>
  ));
};
export default TableSettingPagination;
