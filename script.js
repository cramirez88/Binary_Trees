const depthFirstValues = (root) => {
  if(!root) return []
  let stack = [ root ]
  let newArr = []
  while(stack.length > 0){
    let node = stack.pop()
    newArr.push(node.val)
    if(node.right !== null) stack.push(node.right)
    if(node.left !== null) stack.push(node.left)
  }
  return newArr
};