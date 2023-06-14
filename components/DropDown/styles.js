export function  dropdownStyles(isExpanded) {


  return {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '0px',
    gap: '4px',
    width: '223px',
    minHeight: '174px',
    height: isExpanded ? '320px' : '40px',
    overflowY: isExpanded ? 'auto' : 'hidden',
    transition: 'height 0.3s ease',
  }

};
export const ItemStyles = {
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '14px',
  lineHeight: '24px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '8px', 
  padding: '8px 12px',
  width: '223px',
  height: '40px',
  borderRadius: '6px',
  textTransform: 'none',
  color: '#667085',
};
export const numberStyles = {
  width: '14px',
  height: '20px',
  color: '#98A2B3',
  fontSize: '12px',
  marginLeft: 'auto'
}