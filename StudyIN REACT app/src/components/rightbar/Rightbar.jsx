import "./rightbar.scss"

const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="container">
        <div className="item">
          <span>Filter Posts</span>
          <div class="filter-dropdowns">
            <select name="Modules" className="Modules">
              <option value="Modules">Modules</option>
              <option value="ALG1">ALG1</option>
              <option value="GL">GL</option>
              <option value="ANA2">ANA2</option>
              <option value="AI">AI</option>
              <option value="ARCHI">ARCHI</option>
              <option value="FRENCH">FRENCH</option>
              <option value="ENGLISH">ENGLISH</option>
              <option value="BDD">BDD</option>
            </select>

            <select name="wilaya" className="wilaya">
              <option value="all genres">Wilaya</option>
              <option value="01">01</option>
              <option value="02">02</option>
              <option value="03">03</option>
              <option value="04">04</option>
              <option value="05">05</option>
              <option value="06">06</option>
              <option value="07">07</option>
              <option value="08">08</option>
              <option value="09">09</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
              <option value="31">31</option>
              <option value="32">32</option>
              <option value="33">33</option>
              <option value="34">34</option>
              <option value="35">35</option>
              <option value="36">36</option>
              <option value="37">37</option>
              <option value="38">38</option>
              <option value="39">39</option>
              <option value="40">40</option>
              <option value="41">41</option>
              <option value="42">42</option>
              <option value="43">43</option>
              <option value="44">44</option>
              <option value="45">45</option>
              <option value="46">46</option>
              <option value="47">47</option>
              <option value="48">48</option>
            </select>

            <select name="Commune" class="Commune">
              <option value="Commune">Commune</option>
              <option value="01">01</option>
              <option value="02">02</option>
              <option value="03">03</option>
              <option value="04">04</option>
              <option value="05">05</option>
            </select>
           
            <select name="period" class="period">
              <option value="period">Period</option>
              <option value="1 ans">1 ans</option>
              <option value="2 ans">2 ans</option>
              <option value="3 ans">3 ans</option>
            </select>
            
          </div>
        </div>
        <div className="item">
          <span>Last Activities</span>
          <div className="user">
            <div className="userinfo">
              <img src="https://netstorage-briefly.akamaized.net/images/661d72a2faad5312.png" alt="" />
              <p>
              <span>Wail Bouguerra</span> changed thier profile picture
              </p>
            </div>
            <span>3 min ago</span>
          </div>
          <div className="user">
            <div className="userinfo">
              <img src="https://netstorage-briefly.akamaized.net/images/661d72a2faad5312.png" alt="" />
              <p>
              <span>Wail Bouguerra</span> changed thier profile picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userinfo">
              <img src="https://netstorage-briefly.akamaized.net/images/661d72a2faad5312.png" alt="" />
              <p>
              <span>Wail Bouguerra</span> changed thier profile picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userinfo">
              <img src="https://netstorage-briefly.akamaized.net/images/661d72a2faad5312.png" alt="" />
              <p>
              <span>Wail Bouguerra</span> changed thier profile picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>
      
      </div>
    
    </div>
  )
}

export default Rightbar