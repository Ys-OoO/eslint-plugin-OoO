module.exports = {
    meta:{
        type:'problem',
        name:"template-literals",
        messages:{
            "unexpectedString":"Use template literals instead of concatenation"
        },
        schema:[],
        fixable: 'code'
    },
    create: function(context){
        return {
            VariableDeclaration(node){
                const declarations = node.declarations;
                if(!declarations){
                    return;
                }
                // console.log(declarations)
            },
            ExpressionStatement(node){
                const expression = node.expression;
                if(!expression){
                    return;
                }
                const target = expression.right;
                if(!target){
                    return;
                }
                const op = target.operator;
                if(op !== '+'){
                    return;
                }
                // 处理 left and right
                const items = [];
                let hasIdentifier = false;
                let curNode = target;
                while(curNode){
                    let left = curNode.left;
                    let right = curNode.right;
                    if(!left) break;
                    if(left.type === 'Identifier' || right.type === 'Identifier'){
                        hasIdentifier = true;
                    }
                    items.unshift(right);
                    if(left.type !== 'BinaryExpression'){
                        items.unshift(left);
                    }
                    curNode = left;
                }
                if(hasIdentifier){
                    context.report({
                        node,
                        messageId:"unexpectedString",
                        fix(fixer){
                            let fixed = '';
                            items.forEach(item=>{
                                fixed += item.type === "Identifier" ? `\${${item.name}}` : `${item.value}`;
                            })
                            return fixer.replaceText(node, `${expression.left.name} = \`${fixed}\``);
                        }
                    })
                }
            }
        }
    }
}