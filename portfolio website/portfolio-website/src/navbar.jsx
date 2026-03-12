function navbar() {
  return (
    <nav style={{display:"flex", justifyContent:"space-between", padding:"20px"}}>
      <h2>Pratik</h2>

      <div>
        <a href="#about" style={{margin:"10px"}}>About</a>
        <a href="#projects" style={{margin:"10px"}}>Projects</a>
        <a href="#contact" style={{margin:"10px"}}>Contact</a>
      </div>
    </nav>
  )
}

export default navbar