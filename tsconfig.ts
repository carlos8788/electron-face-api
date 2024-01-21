{
    "compilerOptions": {
      "target": "es6",                 // Especifica el nivel de ECMAScript a apuntar.
      "module": "commonjs",            // Especifica el módulo de generación de código: 'commonjs' para Node.js.
      "lib": ["dom", "es2016", "esnext.asynciterable"], // Librerías a incluir en la compilación.
      "allowJs": true,                 // Permite la compilación de archivos JavaScript.
      "outDir": "./dist",              // Redirige la salida de los archivos compilados a una carpeta.
      "rootDir": "./src",              // Especifica la carpeta donde se encuentran los archivos TypeScript.
      "strict": true,                  // Activa un conjunto de estrictas verificaciones de tipo.
      "esModuleInterop": true,         // Permite la interoperabilidad de módulos ES6 con módulos CommonJS.
      "resolveJsonModule": true,       // Permite la inclusión de archivos '.json'.
      "sourceMap": true,               // Genera archivos '.map' para depuración.
      "removeComments": true,          // Elimina los comentarios en los archivos compilados.
      "noImplicitAny": true,           // Eleva un error cuando una expresión y declaración tienen un tipo implícito 'any'.
      "moduleResolution": "node",      // Estrategia de resolución de módulos.
      "skipLibCheck": true,            // Omite la verificación de tipos en archivos de declaración.
      "forceConsistentCasingInFileNames": true // Evita problemas en sistemas de archivos que no distinguen mayúsculas de minúsculas.
    },
    "include": [
      "src/**/*.ts"                    // Incluye todos los archivos TypeScript en 'src' y subdirectorios.
    ],
    "exclude": [
      "node_modules",                  // Excluye la carpeta 'node_modules'.
      "**/*.spec.ts"                   // Excluye archivos de pruebas.
    ]
  }
  