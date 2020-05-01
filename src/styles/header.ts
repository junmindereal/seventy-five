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
    inset-1/10
    p-8
    border
    border-gray-300
    bg-white
    outline-none`,
  modalHeading: `
    font-semibold
    text-3xl
    text-gray-900`,
  modalClose: `
    absolute
    top-0
    right-0
    pt-8
    pr-8`,
};
