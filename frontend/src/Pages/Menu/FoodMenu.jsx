import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for the back button

const FoodMenu = () => {
  const menuItems = [
    {
      id: 1,
      category: "Breakfast",
      name: "Pancakes",
      description: "Fluffy pancakes served with maple syrup and butter.",
      price: "₹300",
      image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUTEhIVFRUWFxYXGBcYFxcWGRcYFxoYFxYXFxcYHSggGBolHRcXITEhJSkrLi4uGh8zODMsNygtLisBCgoKDg0OGxAQGi0lICYtLy8vNS8tLS0vKy8tLS0tLS0vLzUtLS8wLS0tLS0vLS0tLS0tLS0tLS0tLy0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAFAAIDBAYBB//EAD4QAAEDAgQDBQYEBgEEAwEAAAEAAhEDIQQFEjFBUWEGInGBkRMyobHB8EJS0eEUFSNicvGSM4KiwhZTkwf/xAAaAQADAQEBAQAAAAAAAAAAAAAAAgMEAQUG/8QALhEAAwACAQMCBAUFAQEAAAAAAAECAxEhBBIxE0EiMmGhUXGBkfBSscHR4RQj/9oADAMBAAIRAxEAPwD1tdlNXUox1IriaSgBEri7KSAEF1JJACKaSklCAOJALpgbqm/MLwxpd12A8Slq1Pk6pb8FuF1D6/tCJNXSOTWyfUpYaoad6et54lxn01RB8FF9RO9aKei9BN1F8gBpM+FvGSq1XGUW2dXpD/u1eVkNzjPNLQ0PYdU6ms98WnzWFc1+ku1BsEQCHAuk/hgR6rJ1PXVjeonf5mjB0net0z0KvmtH8FZjrbBrjfyOyVDHPcAdDYMRDupBkH3VhWYOqGh+hzi4mBofqtBmYgiORK1WBxR9mwk6ZBEXvFjY3tyJlSjrctt93BS+miVxyGBVqcafo4Fcq41rATU7gAm/yA4lUa+I031C/OJI3gD91UzHCiuNDKJdUADnP1GmINgCSCCTcx/b61fU5eezl/X/AIiSwx7/AM+5epZ5TLwx3dnYy1wvsCWmxRQFY3Jcs/qEHuuZcsd73MbWjqFpZaNgZ/tJIB4hc6brsrT9Re5zN08J6kuLkKk2tUG+kxvJAj0T6eYsIkhzRtqg6f8Al+q2z1WOvL1+ZneGl9SyQuFOaQRIMjmLrhC0ExhXE4rhXDoxcTimoA4uLpXEAJMKcUwoASSSSACS5K4kgBSkkkgBJAJAJwCAFCS6kAgDkIJmXajD0araTnd479BfYcUQx+PDLCNRt980Fx2SsqNBrS524a2AAOQtvG5WXPmc8Sy+HHL5vwaTA1MPWaHNdrHImPgreHwbGkj2bWiYbBJkQLkbA+q84xeVVKJNTD1HAtc0NpuBIJcYAY7Y947L0epjg2xueMc+K7gyeoviXj7hmx9nyvaY+tgKbjJbfoS2fHSRPmquIyDDvbpfT1NmYc5xg9JNlbp4tsck2pjWfmj0V3MPykRTteGwK7sbhmHXRD6RF+5DiQRBA9oHEeSlw+BDJqB1fVUI7j3bkbS0fXYckSbiwJMmBuTcqJ2IjvO94jb8o5DrzUKnHPjj/H1Kd9vy9lyoxsX+aE4zCsebuNtrbekT5qLFY5UXYxQy9RjrgaMdLkuNwhaCGaXEkG5IkDhIiPQprKHsmyynL3kmo4c/+4yWjYeCgZjlL/HxxSRkieUyjVe4IzUkmSx4dwMaSPBw4Kph8RUgtLnEHh3Z9YlGcRnMbqlQrUnvBgMkGRwnh4LLlc5a7k/8eS0XpaaAuIc9hkuLpJ3kgD7hXKWKqae6RfcAn5SiWOwh3p96eo+qptIa3v0YPMG/wWS+ltXvlfv/AHL96pDcNmDme7IP5fwny/RHMuzhlSGnuv5Hj4H6LHVnw4uBMcj81dwFSjUI1WNrzx8F3pesy4b7N7X8/YTNgmltm0ITSquExJ1ezfuRLTzHI9VcIX0mPIrW0eXUuXpkZTU8phTnBpXE4ppQA0ri6UkANXUl1AF2UpTJTmhADl1JdCAEF1IBVcfmVOiO8ZdwaN/PkuNpLbBLZcDVWGLY93s2PBdFzwaOJnnwHXwMZXH5pVxB0g6WbmNgBuTzspuzL9LS4C74ceYEDSPL6lQ9dU9IssPG2FMxwgp1GFo1ag4an3iBqJZHE8voE2rUqadTS2AbbFzuBBIs0fHwVrG5iDTcyo0FpBHh1HI8igQzSnSphtNm0+8S8mdydRifJZckru4fkvHc14L+V1gAatQCZ/pixjcF/EnkJJsJ4qb+PG53WYqZo4m8nkruGrath8VSL0tHax87YbOKJ2B8VPhRxcJVGnWYwd4ifvglWzA+ze4fha4iY3AlO7S8sn2v2DdbFMG8WvHXmhWLxqwdTNHuMlykbj3c5WK+pWQacLk1NTESq73oBTzE8TCvUcdPH5Lzrrksp0Xg8ptWvAXKdSeE+BhKpQJ3EAXU+234O7QLxeJO5+yrOV4xrANTZMy4zz6dBCB5ljWtLnHZuw5nh8U3IqurvVG2PIp5VpKp8F4ha5NQMeGO1Uy6OLT7vpwQ/MswL3foTCa6o24BAtMbTzAJ3UD6sbkHoCF2smWlrfH08DTEp70QYmtwgnmpcE6np74JA25Tbc7woKdQEEqs6wJk9Vk7m2W1vg2P8G0hjhUOoXaQSY+lkayvH+0lj7VG79R+YLzzAZk5ly2YO08OSK/zqa1Ko1pYGuAM8WmJk8bAj0XqdF1Livp7/wCzFn6dta/Y3ZTCpHBMK+gPKGFMKc5RkoAUpJBdQBxJJJAFsJ4TWp4QB1OaFwBAM9zvTNOnPVw+QS3albZ2ZbZZzjOgwFlO7uLuXh1WTpsdVN3XJu4nbqTwT2968qn/ABumo1gbJBDp68/j8F52bK3yzZhxb4RoM0y19PDODPxtABg31A3nY845BDeyeLOm4ubxKt/zhzgWETF7uBPpuszkuIcys5nEOM8rklp9Pkpxab+D7llL01Rscc5rjD3FoiYAn6oJUosBIYbcCUbxdNjmTN+CCYhzbR5rt8Pk5j8HDULNgHdYn0Cs0MS6DeFA3Gta03b81TOJIu0ee3zUqyJLlle3fsXMNRdUdaSeeysZvTqUqRbYkggwZ3HHkENdn9QWs0byALoplNB1UCbk3uZMdQu43NbU7bOX3Ty/Bi/aGbgi6sU6nVO7U4BzMS8gPAsWuExECYI6oMarpk97x7rvVv1lQmIltM0Oe5KkEH1yCrWExBQsVWHaoWnk9pj/AJMH0Cu0KzQNpHEtIcB4wTp84XPQ29k64Xg0eAxsHmjteuHUTG5WKw2JZI71lazLtKG0zToMLnu7ocRYE2tzPRaMe0mn4M1Y26WjPZq/XWFNuzbu8eA++aLYCnEBriPFUsvwgAjjcl3XmieFpQQd+aV9sx2mssVmu6GPJcosa+bKerUvtAhKliw2wAled21L3LHW2vBVcyD3QLen7Kji8RcW8QFfdJ93z6dVYr5I8jv1BFiIG/LayRTum9eDvcp8gQvaD3TY87eSsPx2lkEi543vtMJmOyl7SSJe1vHiOcgwd/NBMxrk6WzBndVnHu1oZOaPb8LW102O/M1p9QnOKEdjXE4Rgdu2W+kfUlF3BfUYq7oVfQ+fue2miJyYnlIBOKNC6kVxAHEkkkAXgE4JoKZi8QKbS4/ZXG9AD89zIMBpgw4i55BZcd65NwVNjXl75Imdz8kzEN0t2B6rFkrue2aYnS0LFEARFzb1VjLskY55ebE7mxM3HEWEH7hCqVb2lRrXHug6iejQXH5I7hcK407VXNbAs0i8iZm91keTezQlpFitlFMmdL9Q/FuXdO8DAtwhY3Navs6mrTDiHAj/ABNiR4fNap7GBv8AUq1agPAzE8u635lY/Oe8R3Q1pkN5Hfe1zbcW+sapzyiuNc88nG59DSC+Dy4+Q3UuHwtZ13AhttMguknhwHjeynyDAUaTg4AmpJ7xIBH+M7crX38tTgHMe7U/U9wFgQNPGdE24eKHjV/Fvf8Agasin5UZih2cJJL6r2ji0MEgztIMOHUbcY2RFuBw7bWq2/EXOHSdDbT1MXG6KPw1d7nOYRSp7aSJBHE/O32XOyt2n+rUe6febr0tvw0zxPDj0SdnupEeXflg3+FpnuPe1/Esot0gTxLyTMA+78FN2fw7aVPuEwS+JN41EN8bAKf2rI0Me1zWkE6g3TPIkjvSeWmEPwZeGuJ29o9rR0a4geVo8k8W09yDXctMMe03VXF0KTvfa13iAVSxFZw4kfBMaHETK1Tm2uTnpa5KWJ7OUHk6HFnT3m+hv8UNxHZWoLsLT6gz99VqGU+JF1K0GeRU3GOufBT1LXuZCj2cqk6namuG5Nr+M3CJOoAQHNM8SbHaJtuiWZufBgnbabIZgGkWe4gE3knhz4Dx6Kd1GJ9qfJ1brllh+FaBawj1VOIKP4nCkiQYEDp/oIcXM5yRYXbv6qNV7M7DKQE7nZTNa0EFwgH5q5h8GY8ePipK2XBrm6j681myJ+UU714KWMDYlpiCDunsxYDRNZ4EiL8tvmquY1mglkXJ3UbcJqEO2UHNdy5HSWuQzh8S2NB7oJtxBHCXG3yVDFYKnVxIa1oLWRccbw31MlDM0xNhSp3neFpOxmXm1Q7wCecgR8/ktvSKq0n/ABGfNKxz3GlwVIU2hg2H2SrTiq9S/FPpOC9/G+3g8mlvkfC5CemlXEGFNTimkoA4kkkgC+EEzqqSYB7osfFF674E+azuIvPGZKjlfsPC5K9OmG78ed0HzrF6RpafXgj9RgDeizFBvtaxm4Hn4LHl38qNMfiy5keAMajfc+RlEMoxwc32LyAGktdxcQPd0x0IMnaUYy7CDTEGIjyXl+Z4h1DEl7Z0vieMGLyo5l6ekvdMv069WmmejuGEAIFKeF3v/wDUgFZrOcXh2sqBuHaSWEanEu0gTGmTZQYfHlze6QedwqGJxBd/Ta0vmxgTHxUp6uX4S3+RZdPp8t/uUsmzKQKdQ3B7jjx/tceB5H1WpwuJIIaSQfzbQeRA3/1usnisnewXEEm8kW57eily/OTSb7OoxzwDaTcN4CTfby2We0/mh8j1Cfym7pZ2R3XB0CZIO20SSJ+NvRXMIylUAJOqfwlwdfzsfvmgGXVKVdv9Op3vxNdZw8Yv53Csfwddshsi02ggjrpMDxSO8ie6W/0INQ+PDD2YUKZAY5jQ5xhu4ixM23IEkDwVLGgNIDdgI6BU85zWsHUu5F3SQJnY7C8xNvBRNx7H7unaRYEdIcU2bqUm0l+o2PDXaqFiK4iXA/68ELdmdQHuhoHqfO8D4ohjpcABAadzuQ0XO1uEqTLMiDxrqCx2bJFuAMbnmoRkq+IK7mVuga3Pbw6NXUEeGxCMYbG+0EgdDxg+PFXavZ6iWkeyb4ffBBMtwXsqlSkOBkHjFjH3yVd1jabYqqLXBZzGSwjSSQpckyxxpAu094TcSb3P1V5lK3zTGuNEQ13cJ24jnCbIp330I6etI6/LS46XO28fhyHgqZyRjTaoBA2N2nxvZE8XQJYCwaibzPPiFRZgagA1SCdxwKk4n3X9winryVX1jSsRY2mdQvwBBv6LlWtJBFxbjIHhKssy+q5xLiCPHh8yn5jl1JjNXtNLo4Gd9uaWsVNfB4+o3dO/qD8ZRZOp3DyQurWfWJZSs0buj0DUqfZ6vXdJc4U5FzIt8DyR2nh2Ybu1HNbI7vMjw52VFDS58fYd5JnhPbBGXZSKXAlxMybnzVrG5qaDqdNpLXB14kSHRzsQrdLMQQ5zWtIjjv6HdVMXiG4iGuYAQTB34cOS7SetpsSW3W7RqMrx3tAWn3mq403QXs7QaxzoJcTx6c/VHz0Xr9H3+ivUe2edm7VT7fBzYxzuuFcrG08iulb5ZnY0picU1MBxJdSQA/HPEGTsAg1OmJ5zfdFMSyZkfit5WVRw8uv7KF8spPgH51X0UneEbqp2XwVp53T+07ZYGxcm0I1llHSxo5BRU7sq3qS8RpY4jkfVYzOclZUcXGweDYxd28tjbne1jdbV1djBL/dBugWNYwOZH4qmlsgb6TAPOAR4hZ+sW2h+nbWzE5bkpDjSa8tdvBBLXDm3r0sjVPBVKLSxgge9qgGZ2uPxTtvwV7NMAXH+nqY5t2uFiNrjx/VS4TGkAMxIAcI74Esdx3HunxWOtJ78P+5r9Sn9QCaDoMuO5JkifT8I6KnXy4Fs7E8TuTvK2D8LSds5pBJNoB58YQ/FZcHNc6D/AG8vvcrPfcnyPOQwb8G9pDmy0g2cLHxBCP5X2uLGxX1EtFi1o73HvbCbb9fWbFYGtpExEb7II/DbtdaD5ldV7XxF3M2uTW081pYpzSw+6CSIIPC8emyVfDNMm08+nVYOrWcxzfZS0i08fgpq+fYkASYIO/G3QqWXpKy13yxVicfKbjK8kqa9ckt4N1CI6jjstW+s9guxp8HbryvB9tcQ2NTWPb/iWn1H6ItT7aUyJfSqN/xcHekxdaFFY50vP6f6IZYyXW65No7MnkHQ1tudj5hxCB5xiZioG98Wc2RcG9vDf9LKtQ7X4QRL6jRyLHOjzEq03tPgXC9ZngWOB+IXKmrnVLYspw/lBbe0lyZf1vHjINk6nnXtHNbBiTqNjAFzw3V0VsHWf/TfTcSJ4CI58v8ASkqV8PSOqoWie7AEnnsBfxWPtSydjT/c0+pGuJ5JcqzaoWNDKRnYd4gHlbwhXn1sWfwsb6nj5Kv/APJcMwSA8xybHzhBsw//AKDMilTDRzfcn/tFviVsmeOK/Yzdt0+I/c0D8BXqkaqsDk0RxCs0sBTaeL3N3k6oJ6bA/ssrlrcdjHB1Wq+nQJkhvcLhyBbeOG6M55mYw7RRw8CrG3/1t59Xnr4qimUu6vuLSvfZvn6FftL2q9k72VLTqHvH3tJ5NG0j9ll6eLa52upLyTLpmT5qiwAb7zcm8+ataVmy5HT5NuPDMLSLwxDO97OYDdjFj0jdd7OOL61/dAcTfYAGfoqENptM7m/lwBRWh3cI94B11YpNERDYlx8C3jzKtE9q+4mRcce/BayXMpxgizXNIjw2+Ererzfs5gXtrse47AgDl58SvSqcQF6fRTU49Ueb1Xb3fCNqNlpEcCq1B0tHh+yvIZg3d0jk5w+K3T5MjJymrq4VQ4JJclJAHHGQ7o4+Kia3ncfe6koO71UcnA+oBXY4gfuovyOgJnFHvU4iNSOawxsuIDeeyo5hSnSbWcDH1VLP8xisGHZjQ6ObjMHyA+KzZMqwzVsrMu2pRazvMtLWWHeJsdyBzHAXFln8VimuLiQNcFwAsJAgaeE2QntBnBAaSCQDw4AojhcI0AOjVIBBmQeOxtcLxOp9TPfc3pG/HE4lySUMQ80Waz/UgHVJcRfuyZ4W8Ijin0s7ovilXhpJgO3pum1/yH4dQo6pIHem8ARwFoF562hZ/GUAevA7ctj1/ZWdp+R+xUaWv2fqMBLHSPy2uOUje3FPwualjdNRrhA5D080zsnnDiz2Jd32+7N9TBwjiRfrHgUTxrsNUIZXim8+6XGGmdtD/oYPimfP1/nsyfc0+20QPeyqB+FsAxNzePmon9m6RDi58k7BkQ3zIOopuZdm36SKbosC3hMG21vT6oQcyxdCGnUIgbAg+BIskn04fxL9/wCaKxLpf/OixU7Id1zg8y0OLRF7CWy6bGRCyD8udfUJ80ao5mXuJeyTMyDpM7m2ystzSk7uw1s7uJ1QOfTxRdNa7F99mme+fm5AFDCm7SJ2Uwy907HwWiwL8PJOrc92dw3gTHHirdWtQA97e6zXktMV5HvwZc4IGxaoqmVRsEVdjAKpltgn1MU6panSJPghVkR3kzuHy5+rUHRH059FaxLnd1xqF9SdIYQZ3kRzkuiBdEv5NiwZdDGvN+dvuUaynIqYfTc+XOBBG8Ajj6qlZ5lpX5ZyskpbAeDyTFYgTHs2+krU5L2RoUe/VIcQLudZoHP/AGndoe0D6Z/h8O1pqSS5xFmNiYA4lZoHEPeDXqOeCYA/CJ4hosq08cfX6GfeTIvOkaLNu1jGyzD/AP6RYf4Dw4lZvBsLqmudXGTcmdyeaHZjQOuGtPHaUbyjAv0gu4cfPj43Uctup3v9Cs45xzwU8yw+lxBsCZk7X5qmWtYJLxbgCDP7K9mT3PcQ0yOA3sieRdjtZD64AEyG/KFzCu7wPWRRO6ZUyjKPaf1aw8G/V36IvjWCWtn3ZAHC+/09FPmlUNeWUB7oAMbAwPd523VHBsOqXk8rjmtuKKd8mDJk7uQrhGgMiBPOVo8MbLLZrIZLSB5bovleJBAB3XqRw9GO+VsODbZBME+zv8nfNFqj4YTyBQHAP7o8z6lXXkl7BMFJMaU5UFFKSSSAK5qacQJ2qNierf2IVx0jjZDc6B0h7fepkOHgPeHp8kVw7hUYHjiJUmuRvYq12d0iOv1WQ7aUS19OtfS9oaejm7TykfJblzPFUsXgBVpvpOEg8xz5eahmxLJLllcWTspM8rxDwRc7+aIdlM2J1UD+GXMB4t4gdRv4Hou5l2ZrMJAIc2++48xuhH8mqsc17XBpBkFtyCF5n/ntJyz0Hkx3Pk3r6LXDhPP9CUDxtPTLQIa2w+czxRPKcybVaQQA8XLY/wDJs/h+SsVQ1/d5dL8/NY8i1w+GJjvtfJj30yDqaYIIII3BHEcloMvzanimnDYwNa4+7UsATwng13wKqYzBlvh6W2BKGVsNMyPviuRk1wzW5VrZYxuEx2WkmjUJpfljWzzafd8RHijGH7R4SqxpedDnDvNIkB1pAsoMl7R+zb7HEy6ns1/vFo5OH4m/EdeEGb5KwCcOxpFU6p4Rw0zsDv6K9rHlSVvglrnVLn8V7hqlRw0aw6npiZkKKhicsJ79SmD1Dmgcu8QBKxVbLsSwkuaD0aBw/wARHmhmIrExLT4KeDBCrc8/qUeNtfMz1XVlhv7ah/zHzBXKjsrFzVpHwfqPoJK8+wdam4REWXamApEzrvyundQm05EWB/1M3f8ANcpaY1tJ/wAajvjpUFTt3l1MxT1nnopET0l8LLMwdI8RZR18uoi7jE7IjPjT+X7A+nT8tmgxHb1lQFtLDEf3VCBHWGg380PxHazEHS1rWU9g59zE7kCEFfiGMI0iQTMDjHCfBRVcT7SdJ3Mx0B+7Kin1K7qngqsOOVpI0mXVWlwmpr2l8RJM8CJjhf4ojj69IAgPEzPgLXKzGXZZVqUqga2XO0NZFoDTqeeliAi+D7F13WeYne/rt4qWXAvZ+fwWxKcJ8vwPdndMus0Ec434X6qxg6WJxEtY3TTtciPJF8q7L4ehd8OIvezRzN0Rq5xSpjunXwDWbdL7Qlnplvb/AOkqzyuIWyLJuz1OjLnd9/F7tghWedsGBzqdGSBZz9pPJnTr/tczLMK1YaSdLfyjl15rFYzBvpuMg6SZ1b78+S0tdq1BOJ763kYcy3NSdRcLaum0C3j1Rj2oLQRJBhY/Cu1Q1ku6Dj+nitRSBpUmtcJjeD5q3TOmns5nUp8Cq1C+ppk6W3g8+iJ5eTMcih2X4eRqdub3vbgj2V4e62StmWmXszrltAg8bIVg6lgm9pcVcNB2t+qqYGpC1R5IM0FF6mBVOg9WmlUFY+UlxcQBDizZUOzuN0PdQebbs8OX0VzFmyy+YVC1weLFpkFSv8RkeglijqAz1H2VBkuYNr0w4WdxHVXXtR7AUMbQBGwWZxmFiZHO4WsqSJ+SC5hTJm6la2PLMZjabmuD2WLTYzx/Tgi2U5o2oYMNqDdvB3Vp+imxmEBaQSY8ig2MwfdkWP1WDPgVGma2apzWkEEW6c+Z6/qhmKyoxII42BjbhHoh2XZy+m4MrAubHvfiHj+b5+KP1a00nVKRa6Gkh0B3Q2PH5LBeP+orFOXwZXGYMRLyWjoNTnn8rGz6k2HU2QtvaCvR0sb32AWa4SW/2nj4GUaOIae84glwiTwHJo/COZ3v1Q6vg2ukwDy+QSxlxyu1ra+puU9y5L2Wdsywn2uGkO70sdcAiLg24c0QfmuV1/8AqMdTcebCI82SEIwmTueAdPdA0g8z+I+tvAKz/IP7U7yxHwqeCVRj3w9P8wrS7I4WqNVF+tvMODvlsns7DURcl335IKzIKjTqZqaebSWn1F1epYHF3H8RWjrUf8yVz1Z+v3JvuXiwnS7HUgRJJHJT4jsjQeZLT4KjTwdfT/UxNaOlRwJ8wZKqYirTbZ9SofGo4/CVzvhPlMXeRv5glVyTAUrVDTB5Oe0fBDMdVwlP/okGd9LCf/IiD6q7huz9FzA/TDT5T6qSk/DUeDQeQ7xKKn1FrQK+1+WyrkmaObanQe9x4uIEDhZoPLnwC0BrPaNdeo1ogd1ogDzNyUKqZ0TIpM09Tv6BDKj3vkvcSRIH7BaMeNpa3wSp9z3rQQzLN9fcA0t+Lz16dFRFHf1jgusbO8TyP05pC+zPirqTnglc3ikW23k+E/JN0Oi5sbWsrDGEDceipMitkNKmGj3dPhuo3MNR4Zwbd0/BqfVquJAbudh/7HkAr+HwoaALkm5PXmrJCNktKkeaImsKbJ/EdlXpsi52HFBO0GYSdI3O/QfqVZcEnyU6+I11CZkcP1V7DIVhWotQVoJsL4R6vsKFUCiFJ6ocLMribKSAIMUsxmzd1qMQEAzSnZToANkucOw9S23Ln08V6bl+ObWYHsO+45LyHHUlc7PZ++i8An9Hfup70N5PWHU0Mx+E4if08eYVvLMzp12y034jipa44rrSaBPRl6tMyZHwj4Kg+lLiYkfXwWkxuGBuLITiKQEkieo+AUaRRMA43BBxMGLIfQe+lemYmxbwI4ghaJuEB7x34h145KGthw6QWwOHXzULxJlZvQEp46i7uuIB5Hn0T8MKD3aRVpNcDtqaDY8kAzfK3h2xIFgYJBaNrhSZVgXENJbZoIFoJvK83/xym+WbfU+Hyel4MUw0Na4EAbCPoVNpHA/VeetwFydPonNwJ1cRZV9JmZpfiehyzYG6q4nG0m+9UYByLgPqsh/LyRBcSORJj0T6WXAtuPsJljbOdq/EOV89oCZcXdGt+phD35qC4+yoMBJu5w1FQNwRAjTPXip8NQOmQ31+KZYJ9zu0iKvUq1CA+o8iLAWb6CydSwxBHhxV9mGMiTzU7sPaRuPlxVlAveUDSm4kFKjSOoyVdfRbFyT99FHTc0gtgmLWHxXe053ENVvGJEb9VKzSBAUtyNJEcJ+VuCd/DgXPqmUnNlcvFxd3hwXSZt7zuXAdSpGanTpFo38J25q3Rw7QDHHfmT1TpCtkeHwYFzdx3P0HRWqVIj9U6nTMSeCF5tmvspEgk+60b+LuipKEbJM3zIU2xxOw59T0WZBLiSbkpjnue4ucZJ+4HIKxRYnQrLWGYiVEKrQYr1IK0kyzTVyi5U2KzSKcC4kog5dQA6sEHx7EkkrBGbx1FBcTRSSU2dRNlmdvoOEuMD8XEePMfHxXpOT9pG1YbUs7nFikkkb0+B/IXqNkdFUxFJp4JJJ2hUDX4eSfioAJkC44z93SSUShXfhZJ2ts07eRVZ2Gbts5JJK0MjtPDd6CNx8v9rpwo18tvqupJGkdTJW4eDFj8FJTw8GDsdoXEkaRzZYFBvIKIzcNiDz5+CSSGCIiwkATsRIXS3vQJNr3tfx8F1JGjux2g7c9uQXGMh3OeXzuuJLpwlJmw3+XmlTw0+86Ty2HpxSSXUBaZO0JzgGb8UklRIVmfzrtAQTTpjvcSdm/qVnwCTLjJO5PFJJdFLFJqv0KSSSeRWEKLFaYFxJVQpMFPTSSXQJwUkkkHT//2Q==" // Add image URL for the pancakes
    },
    {
      id: 5,
      category: "Lunch",
      name: "Caesar Salad",
      description: "Crisp romaine lettuce tossed with Caesar dressing, croutons, and Parmesan cheese.",
      price: "₹500",
      image: "https://www.simplyrecipes.com/thmb/qKL0-KpK_Lq9kmr14Fxl7IcSQMY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Caesar-Salad-METHOD-07-2-87c72fc60da74b38b5d14022d8f9eb01.jpg" // Add image URL for the Caesar Salad
    },
    {
      id: 3,
      category: "Dinner",
      name: "Burger",
      description: "Juicy beef patty with lettuce, tomato, and cheese on a sesame seed bun.",
      price: "₹350",
      image: "https://static.toiimg.com/thumb/83565509.cms?width=1200&height=900" // Add image URL for the burger
    },
    {
      id: 2,
      category: "Dinner",
      name: "Pizza",
      description: "Delicious pizza topped with pepperoni, mushrooms, bell peppers, and olives.",
      price: "₹550",
      image: "https://cdn.loveandlemons.com/wp-content/uploads/2023/02/vegetarian-pizza.jpg" // Add image URL for the pizza
    },
    
    {
      id: 4,
      category: "Breakfast",
      name: "Eggs Benedict",
      description: "Poached eggs with Canadian bacon on an English muffin, topped with hollandaise sauce.",
      price: "₹300",
      image: "https://natashaskitchen.com/wp-content/uploads/2022/04/Egg-Benedict-SQ.jpg" // Add image URL for the eggs benedict
    },
    // Add more menu items as needed

{
  id: 6,
  category: "Lunch",
  name: "Club Sandwich",
  description: "Triple-decker sandwich with turkey, bacon, lettuce, tomato, and mayonnaise.",
  price: "₹450",
  image: "https://hips.hearstapps.com/hmg-prod/images/delish-200511-seo-club-sandwich-h-14383-eb-1590780714.jpg?crop=0.671xw:1.00xh;0.123xw,0&resize=1200:*" // Add image URL for the Club Sandwich
},
{
  id: 7,
  category: "Dinner",
  name: "Grilled Salmon",
  description: "Fresh Atlantic salmon grilled to perfection, served with roasted vegetables.",
  price: "₹600",
  image: "https://www.dinneratthezoo.com/wp-content/uploads/2019/05/grilled-salmon-final-2.jpg" // Add image URL for the Grilled Salmon
},
{
  id: 8,
  category: "Dinner",
  name: "Beef Stir-Fry",
  description: "Tender beef strips stir-fried with mixed vegetables in a savory sauce, served with rice.",
  price: "₹500",
  image: "https://www.allrecipes.com/thmb/7N-Xq1XMMJw8G0KJv2e0ETUYB2I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/228823-quick-beef-stir-fry-DDMFS-4x3-1f79b031d3134f02ac27d79e967dfef5.jpg" // Add image URL for the Beef Stir-Fry
},
{
  id: 9,
  category: "Breakfast",
  name: "French Toast",
  description: "Thick slices of bread dipped in a mixture of beaten eggs, milk, and cinnamon, then fried until golden brown.",
  price: "₹250",
  image: "https://hips.hearstapps.com/hmg-prod/images/how-to-make-french-toast-1589827448.jpg?crop=0.734xw:0.490xh;0.0897xw,0.323xh&resize=1200:*" // Add image URL for the French Toast
},
{
  id: 10,
  category: "Breakfast",
  name: "Egg and Cheese Croissant",
  description: "Flaky croissant filled with scrambled eggs and melted cheese.",
  price: "₹250",
  image: "https://www.marcellinaincucina.com/wp-content/uploads/2022/02/egg-bacon-and-cheese-croissant-1-3.jpg" // Add image URL for the Egg and Cheese Croissant
},
// Add more menu items as needed
// Add more menu items as needed
{
  id: 11,
  category: "Snack",
  name: "Nachos",
  description: "Crispy tortilla chips topped with melted cheese, jalapenos, sour cream, and salsa.",
  price: "₹200",
  image: "https://recipesblob.oetker.in/assets/b72049329c8742b98daf790c9ef937bd/1272x764/loaded-nachos.jpg" // Add image URL for the Nachos
},
{
  id: 12,
  category: "Snack",
  name: "Chicken Wings",
  description: "Crispy fried chicken wings tossed in your choice of sauce (Buffalo, BBQ, Teriyaki, or Garlic Parmesan).",
  price: "₹450",
  image: "https://www.foodnetwork.com/content/dam/images/food/fullset/2019/2/19/1/FN_Air-Fryer-Chicken-Wings-H_s4x3.jpg" // Add image URL for the Chicken Wings
},
{
  id: 13,
  category: "Juice",
  name: "Orange Juice",
  description: "Freshly squeezed orange juice, rich in vitamin C.",
  price: "₹140",
  image: "https://www.healthifyme.com/blog/wp-content/uploads/2022/01/cropped-Orange-Juice-1-1.jpg" // Add image URL for the Orange Juice
},
{
  id: 14,
  category: "Juice",
  name: "Apple Juice",
  description: "Refreshing apple juice made from hand-picked apples.",
  price: "₹140",
  image: "https://glycemic-index.net/images/ogjwI69crE.webp" // Add image URL for the Apple Juice
},
{
  id: 15,
  category: "Snack",
  name: "Cheese Platter",
  description: "Assortment of gourmet cheeses served with crackers and fruit.",
  price: "₹600",
  image: "https://www.lifeasastrawberry.com/wp-content/uploads/2018/11/how-to-build-a-cheese-plate-1.jpg" // Add image URL for the Cheese Platter
},
{
  id: 16,
  category: "Snack",
  name: "Bruschetta",
  description: "Toasted bread topped with diced tomatoes, basil, garlic, and olive oil.",
  price: "₹350",
  image: "https://www.simplyrecipes.com/thmb/127DXZWz5NdkxFQ9d1n3scKD4uM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Bruschetta-Tomato-Basil-LEAD-3-772fd11de4144552a485af87f7033bf8.jpg" // Add image URL for the Bruschetta
},
{
  id: 17,
  category: "Juice",
  name: "Pineapple Juice",
  description: "Sweet and tangy pineapple juice, perfect for a tropical refreshment.",
  price: "₹140",
  image: "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/317061_2200-732x549.jpg" // Add image URL for the Pineapple Juice
},
{
  id: 18,
  category: "Snack",
  name: "Mozzarella Sticks",
  description: "Golden fried mozzarella sticks served with marinara sauce.",
  price: "₹250",
  image: "https://sugarspunrun.com/wp-content/uploads/2021/07/Homemade-Mozzarella-Sticks-Recipe-1-of-1.jpg" // Add image URL for the Mozzarella Sticks
},
{
  id: 19,
  category: "Snack",
  name: "Fries",
  description: "Crispy French fries seasoned with salt and pepper.",
  price: "₹220",
  image: "https://www.recipetineats.com/wp-content/uploads/2022/09/Fries-with-rosemary-salt_1.jpg" // Add image URL for the Fries
},
{
  id: 20,
  category: "Juice",
  name: "Watermelon Juice",
  description: "Refreshing watermelon juice, perfect for hot summer days.",
  price: "₹140",
  image: "https://parveenskitchen.com/wp-content/uploads/2020/09/DSC_0333_edited.jpg" // Add image URL for the Watermelon Juice
},
// Add more menu items as needed
// Add more menu items as needed
{
  id: 21,
  category: "Lunch",
  name: "Grilled Chicken Salad",
  description: "Fresh mixed greens topped with grilled chicken breast, cherry tomatoes, cucumbers, and balsamic vinaigrette.",
  price: "₹650",
  image: "https://www.eatingbirdfood.com/wp-content/uploads/2023/06/grilled-chicken-salad-hero.jpg" // Add image URL for the Grilled Chicken Salad
},
{
  id: 22,
  category: "Lunch",
  name: "Club Sandwich",
  description: "Classic triple-decker sandwich with layers of turkey, bacon, lettuce, tomato, and mayo on toasted bread.",
  price: "₹400",
  image: "https://hips.hearstapps.com/hmg-prod/images/delish-200511-seo-club-sandwich-h-14383-eb-1590780714.jpg?crop=0.671xw:1.00xh;0.123xw,0&resize=1200:*" // Add image URL for the Club Sandwich
},
{
  id: 23,
  category: "Lunch",
  name: "Vegetable Stir-Fry",
  description: "Assorted vegetables stir-fried in a savory sauce served over steamed rice.",
  price: "₹490",
  image: "https://natashaskitchen.com/wp-content/uploads/2020/08/Vegetable-Stir-Fry-2.jpg" // Add image URL for the Vegetable Stir-Fry
},
{
  "id": 24,
  "category": "Dessert",
  "name": "Chocolate Lava Cake",
  "description": "Warm chocolate cake with a gooey molten center, served with vanilla ice cream.",
  "price": "₹200",
  "image": "https://preppykitchen.com/wp-content/uploads/2022/03/Chocolate-Lava-Cake-Recipe.jpg"
},
{
  "id": 25,
  "category": "Dessert",
  "name": "New York Cheesecake",
  "description": "Creamy cheesecake on a graham cracker crust, topped with strawberry compote.",
  "price": "₹220",
  "image": "https://www.onceuponachef.com/images/2017/12/cheesecake.jpg"
},

{
  "id": 28,
  "category": "Beverage",
  "name": "Iced Coffee",
  "description": "Chilled coffee served over ice with a splash of milk.",
  "price": "₹210",
  "image": "https://frostingandfettuccine.com/wp-content/uploads/2022/12/Caramel-Iced-Coffee-6.jpg"
},
{
  "id": 29,
  "category": "Beverage",
  "name": "Mango Smoothie",
  "description": "Refreshing smoothie made with ripe mangoes and yogurt.",
  "price": "₹220",
  "image": "https://plantbasedonabudget.com/wp-content/uploads/2021/07/citrus-smoothie-5.jpg"
},
{
  "id": 30,
  "category": "Dessert",
  "name": "Tiramisu",
  "description": "Classic Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cream, dusted with cocoa powder.",
  "price": "₹240",
  "image": "https://handletheheat.com/wp-content/uploads/2023/12/best-tiramisu-recipe-SQUARE.jpg"
},
{
  "id": 31,
  "category": "Dessert",
  "name": "Red Velvet Cake",
  "description": "Moist and velvety red-colored cake with layers of cream cheese frosting.",
  "price": "₹230",
  "image": "https://handletheheat.com/wp-content/uploads/2013/04/red-velvet-cake-recipe-SQUARE.jpg"
},


{
  "id": 34,
  "category": "Beverage",
  "name": "Green Tea",
  "description": "Steeped green tea served hot or cold.",
  "price": "₹190",
  "image": "https://akm-img-a-in.tosshub.com/sites/visualstory/stories/2023_08/story_55314/assets/2.jpeg?time=1691768874"
},
{
  "id": 35,
  "category": "Beverage",
  "name": "Virgin Mojito",
  "description": "Refreshing mocktail made with lime juice, mint leaves, sugar, and soda water.",
  "price": "₹200",
  "image": "https://40aprons.com/wp-content/uploads/2021/04/virgin-mojito-3.jpg"
},
{
  id: 30,
  category: "Lunch",
  name: "Margherita Pizza",
  description: "Classic pizza topped with tomato sauce, fresh mozzarella, and basil.",
  price: "₹800",
  image: "https://cookieandkate.com/images/2021/07/classic-margherita-pizza.jpg" // Add image URL for the Margherita Pizza
},
// Add more menu items as needed

    // Add more menu items as needed
  ];

 
  // Get unique categories
  const categories = [...new Set(menuItems.map((item) => item.category))];

  // State for selected category
  const [selectedCategory, setSelectedCategory] = useState("All"); // Initialize with "All"

  // Sort menu items by category
  const sortedMenuItems = {};
  categories.forEach((category) => {
    sortedMenuItems[category] = menuItems.filter((item) => item.category === category);
  });

  // Handle category change
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div>
      {/* Back button */}
      <Link to="/" className="back-button">Back</Link>
      
      <section className="menu" id="menu">
        <div className="container">
          <div className="heading_section">
            <h1 className="heading">Our Menu</h1>
            <p>Check out our delicious offerings below.</p>
          </div>
          {/* Category dropdown */}
          <div className="category-dropdown">
            <label htmlFor="category">Select a category:</label>
            <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
              <option value="All">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
          {/* Display menu items for selected category */}
          {selectedCategory !== "All" && (
            <div className="category-section">
              <h2 className="category-heading">{selectedCategory}</h2>
              <div className="dishes_container">
                {sortedMenuItems[selectedCategory].map((item) => (
                  <div key={item.id} className="card menu-item">
                    <img src={item.image} alt={item.name} /> {/* Add image */}
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <p>{item.price}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          {selectedCategory === "All" && (
            /* Display menu items for all categories */
            categories.map((category) => (
              <div key={category} className="category-section">
                <h2 className="category-heading">{category}</h2>
                <div className="dishes_container">
                  {sortedMenuItems[category].map((item) => (
                    <div key={item.id} className="card menu-item">
                      <img src={item.image} alt={item.name} /> {/* Add image */}
                      <h3>{item.name}</h3>
                      <p>{item.description}</p>
                      <p>{item.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
};

export default FoodMenu;