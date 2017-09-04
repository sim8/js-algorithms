export function getClassName(name) {
  return name.replace(/ /g, '');
}

export function getInstanceName(name) {
  let className = getClassName(name);
  return className.charAt(0).toLowerCase() + className.slice(1);
}


// return string.charAt(0).toUpperCase() + string.slice(1);
export function getURLName(name) {
  return name.toLowerCase().replace(/ /g, '-');
}
