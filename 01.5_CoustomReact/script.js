/* this is repetative task 
function Creatreact(reactelement, container) {
    let element = document.createElement(reactelement.type);
    element.innerHTML = reactelement.children;
    element.setAttribute("href", reactelement.props.href);
    element.setAttribute("target", reactelement.props.target);
    container.appendChild(element);
}
 */
function Creatreact(reactelement, container) {
  let el = document.createElement(reactelement.type);
  for (let key in reactelement.props) {
    el.setAttribute(key, reactelement.props[key]);
  }

  el.innerHTML = reactelement.children;
  container.appendChild(el);
}
let reactelement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "clcik me ",
};
// grab root
let root = document.querySelector(".root");

Creatreact(reactelement, root);
