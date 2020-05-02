export const styles = {
  header: `flex`,
  headerLeft: `
    flex
    w-1/5
    py-6`,
  headerRight: `
    flex
    items-center
    w-4/5
    px-6
    border-r
    border-b
    border-l
    border-gray-300`,
  logo: `
    w-20
    pl-4`,
  button: `
    flex
    items-center
    ml-auto
    px-4
    py-3
    border-2
    border-green-400
    rounded-md
    font-medium
    text-xl
    text-green-700
    hover:bg-green-400
    hover:text-white
    focus:outline-none
    transition
    duration-150
    ease-in-out`,
  buttonIcon: `w-6 h-6`,
  buttonText: `ml-2`,
  modal: `
    absolute
    top-1/10
    right-0
    left-0
    max-w-lg
    mx-auto
    outline-none`,
  modalContainer: `
    relative
    p-8
    border
    border-gray-300
    bg-white`,
  modalHeader: `
    flex
    justify-between
    items-center
    mb-6`,
  modalHeading: `
    font-semibold
    text-3xl
    text-gray-900`,
  modalClose: `
    flex
    justify-center
    items-center
    w-8
    h-8
    rounded-full
    text-gray-700
    outline-none
    transition
    duration-150
    ease-in-out
    hover:bg-gray-200
    focus:outline-none
    focus:bg-gray-200`,
  formGroup: `
    flex
    flex-col
    mb-3`,
  formInput: `
    py-2
    px-4
    font-medium
    text-lg
    text-gray-900
    placeholder-gray-300
    border-2
    rounded-md
    border-gray-100
    bg-gray-100
    outline-none
    transition
    duration-150
    ease-in-out
    focus:border-green-400
    focus:bg-white`,
  formLabel: `
    mb-1
    text-gray-700`,
  action: `
    flex
    justify-end
    items-center
    mt-8`,
  submit: `
    ml-4
    px-3
    py-2
    rounded-md
    font-medium
    text-xl
    text-white
    bg-green-400
    transition
    duration-150
    ease-in-out
    hover:bg-green-500
    focus:outline-none
    focus:bg-green-600`,
  cancel: `
    px-3
    py-2
    border-2
    border-gray-300
    rounded-md
    font-medium
    text-lg
    text-gray-700
    transition
    duration-150
    ease-in-out
    hover:bg-gray-300
    focus:outline-none
    focus:bg-gray-200`,
};
