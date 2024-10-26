import CountUp from "react-countup";

export default function Cards() {
  return (
      <section className="values">
            <div className="entrys">
                  <div className="div-money">
                        <h4>Entradas</h4>    <img className="i-entry" src="/images/up.png" alt="" />
                  </div>
                  <h3 className="item-money">
                        <CountUp 
                            end={ 3500 }
                            duration={3}
                            prefix={"R$ "}
                            separator="."
                            decimal=","
                            decimals={2}
                        />
                  </h3>
            </div>

            <div className="exits">
                  <div className="div-money">
                        <h4>Saídas</h4>    <img className="i-exit" src="/images/down.png" alt="" />
                  </div>
                  <h3 className="item-money">
                  <CountUp 
                            end={ 2200 }
                            duration={3}
                            prefix={"R$ "}
                            separator="."
                            decimal=","
                            decimals={2}
                        />
                  </h3>
            </div>

            <div className="total">
                  <div className="div-money">
                        <h4>Total</h4>    <img className="i-total" src="/images/money.png" alt="" />
                  </div>
                  <h3 className="item-money">
                        <CountUp 
                            end={ 1300 }
                            duration={3}
                            prefix={"R$ "}
                            separator="."
                            decimal=","
                            decimals={2}
                        />
                  </h3>
            </div>
      </section>
  )
}