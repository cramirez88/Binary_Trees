// const depthFirstValues = (root) => {
//   if(!root) return []
//   let stack = [ root ]
//   let newArr = []
//   while(stack.length > 0){
//     let node = stack.pop()
//     newArr.push(node.val)
//     if(node.right !== null) stack.push(node.right)
//     if(node.left !== null) stack.push(node.left)
//   }
//   return newArr
// };

// const breadthFirstValues = (root) => {
//   if(!root) return []
//   let queue = [root]
//   let newArr =[]
//   while(queue.length > 0){
//     let node = queue.shift()
//     newArr.push(node.val)
    
//     if(node.left !== null) queue.push(node.left)
//     if(node.right !== null) queue.push(node.right)
//   }
//   return newArr
// };



// const treeSum = (root) => {
//   if(!root) return 0
//   let queue = [root]
//   let sum = 0
//   while(queue.length > 0){
//     let node = queue.shift()
//     sum += node.val
    
//     if(node.left !== null) queue.push(node.left)
//     if(node.right !== null) queue.push(node.right)
//   }
//   return sum
// };

// const treeIncludes = (root, target) => {
//   if(!root) return false
//   let queue = [root]
//   while(queue.length > 0){
//     let node = queue.shift()
//     if(node.val === target) return true
    
//     if(node.left !== null) queue.push(node.left)
//     if(node.right !== null) queue.push(node.right)
//   }
//   return false
// };


// const treeMinValue = (root) => {
//   let queue = [root]
//   let minValue = root.val
//   while(queue.length > 0){
//     let node = queue.shift()
//     if(node.val < minValue) {
//       minValue = node.val
//     }
//     if(node.left !== null) queue.push(node.left)
//     if(node.right !== null) queue.push(node.right)
//   }
//   return minValue
// };