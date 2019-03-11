const singleThread = () => {
  //   process.argv[2] = "agregando otro argv";
  console.log(`${process.argv}`);

  console.log(
    `==========================================================
================= EL PROCESO EN NODE =====================
ID del proceso: .............. ${process.pid}
Titulo: ...................... ${process.title}
Directorio de Node: .......... ${process.execPath}
Directorio actual: ........... ${process.cwd()}
Version de Node: ............. ${process.version}
Versiones Dependencias: ...... ${process.versions}
Plataforma (S.O): ............ ${process.platform}
Arquitectura (S.O): .......... ${process.arch}
Tiempo activo de node.js: .... ${process.uptime()}
Argumentos del proceso: ...... ${process.argv}
=========================================================`
  );
};

module.exports = singleThread;
