declare module '*.scss' {
    const css: { [key: string]: string };
    export default css;
}
declare module '*.sass' {
    const css: { [key: string]: string };
    export default css;
}

declare module '*.module.css' {
    const styles: { readonly [key: string]: string }
    export default styles
}

declare module 'react-markup';
declare module '*.webp';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';