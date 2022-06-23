import { ChangeEvent, FC, forwardRef, ForwardRefRenderFunction, useEffect, useImperativeHandle, useRef, useState } from "react";

export interface InputRef{
    setValue(value: string): void;
    getValue(): string ; 
}
export interface inputProps {
  onChange?(value: string, e:ChangeEvent<HTMLInputElement> | undefined): void;
}

const Input: ForwardRefRenderFunction<InputRef ,inputProps> = (props, ref) => {
  const { onChange } = props;
  const [currentValue, setCurrentValue] = useState("acb");

  const mounted = useRef(false);
  //tạo event sau khi render sẽ giữ lại sự kiện
  const evenRef = useRef<ChangeEvent<HTMLInputElement>>();

  useEffect(() => {
    if (mounted.current) {
     
      onChange && onChange(currentValue, evenRef.current);
    //   console.log({evenRef});
      
    }
    mounted.current = true
  }, [currentValue]);

  useImperativeHandle(ref, () =>({
    setValue(value){
        setCurrentValue(value)
    },
    getValue() {
        return currentValue;
    },
  }))

  const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentValue(e.target.value);
    // onChange && onChange(e);
  };
  console.log(currentValue);

  return <input value={currentValue} onChange={changeInput} />;
};

export default forwardRef (Input);
