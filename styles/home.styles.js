export const ContainerGridModeStyles = {
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '2.58809px',
  gap: '2.59px',
  width: '69.88px',
  height: '38px',

  borderRadius: '5px',
}

export const SubContainerGridModeStyles = {
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '2.58809px',
  gap: '2.59px',
  width: '69.88px',
  height: '38px',
  border: '1px solid #F2F4F7 ',
  borderRadius: '5px',
  background: '#F2F4F7',
}

export function ContainerIconButton(gridMode) {
  return {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '7.31174px 10.4676px',
    gap: '3.31px',
    width: '9px',
    height: '17.82px',
    background: gridMode ? '#FFFFFF' : '',
    boxShadow:
      '0px 1.03897px 3.1169px rgba(16, 24, 40, 0.1), 0px 1.03897px 2.07793px rgba(16, 24, 40, 0.06)',
    borderRadius: '3.63697px',
  }
}
