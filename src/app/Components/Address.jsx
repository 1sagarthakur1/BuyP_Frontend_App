"use client"
import style from '../Style/userAccount.module.css'
import style2 from '../Style/address.module.css'
import addUserImgesvg from '@../../../public/add-user-image.svg'
import homeaddresssvg from '@../../../public/home.svg'
import shopaddresssvg from '@../../../public/store.svg'
import offiecaddresssvg from '@../../../public/office.svg'
import otheraddresssvg from '@../../../public/other_house.svg'
import mobilesvg from '@../../../public/mobile.svg'
import emailsvg from '@../../../public/email.svg'
import gendersvg from '@../../../public/gender.svg'
import dobsvg from '@../../../public/dob.svg'
import addsvg from '@../../../public/add.svg'
import editsvg from '@../../../public/edit.svg'
import deletesvg from '@../../../public/delete.svg'
import savesvg from '@../../../public/save.svg'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Message from './Message'
import Warning from './Warning'
import BASE_URL from '@/appConfig'


export default function Address({ sendDataToDoOrderPage }) {
    const [otpMessageVisbal, setOtpMessageVisbal] = useState("-100px");
    const [otpMessage, setOtpMessage] = useState(null);

    // const [warningVisbal, setOtpMessageVisbal] = useState("-100px")
    // const [warning, setOtpMessage] = useState(null)

    const [token, setCookieValue] = useState('');
    useEffect(() => {
        // Function to get cookie value by name
        const getCookie = (name) => {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
            if (parts.length === 2) return parts.pop().split(';').shift();
        };

        const yourCookieValue = getCookie('token');

        setCookieValue(yourCookieValue);
    }, []);

    const [selectedButton, setSelectedButton] = useState(null);

    // Function to send data to the main page
    const sendData = (value1, value) => {
        if (sendDataToDoOrderPage) {
            setSelectedButton(value1);
            sendDataToDoOrderPage(value1, value);
        }
    };




    // Addrsss states
    //Home Address feild states
    const [id_Address_HO, setId_Address_HO] = useState(null);
    const [street_address, setStreet_address] = useState("");
    const [landmark, setLandmark] = useState("");
    const [building_no, setBuilding_no] = useState("");
    const [city, setCity] = useState("");
    const [district, setDistrict] = useState("");
    const [state, setState] = useState("");
    const [pincode, setPincode] = useState("");
    const [country, setCountry] = useState("");
    const [address_description, setAddress_description] = useState("");


    //Shop Address feild states
    const [id_Address_SH, setId_Address_SH] = useState(null);
    const [street_address_SH, setStreet_address_SH] = useState("");
    const [landmark_SH, setLandmark_SH] = useState("");
    const [building_no_SH, setBuilding_no_SH] = useState("");
    const [city_SH, setCity_SH] = useState("");
    const [district_SH, setDistrict_SH] = useState("");
    const [state_SH, setState_SH] = useState("");
    const [pincode_SH, setPincode_SH] = useState("");
    const [country_SH, setCountry_SH] = useState("");
    const [address_description_SH, setAddress_description_SH] = useState("");

    // Office Addresss feild states
    const [id_Address_OF, setId_Address_OF] = useState(null);
    const [street_address_OF, setStreet_address_OF] = useState("");
    const [landmark_OF, setLandmark_OF] = useState("");
    const [building_no_OF, setBuilding_no_OF] = useState("");
    const [city_OF, setCity_OF] = useState("");
    const [district_OF, setDistrict_OF] = useState("");
    const [state_OF, setState_OF] = useState("");
    const [pincode_OF, setPincode_OF] = useState("");
    const [country_OF, setCountry_OF] = useState("");
    const [address_description_OF, setAddress_description_OF] = useState("");


    // Other Addresss feild states
    const [id_Address_OT, setId_Address_OT] = useState(null);
    const [street_address_OT, setStreet_address_OT] = useState("");
    const [landmark_OT, setLandmark_OT] = useState("");
    const [building_no_OT, setBuilding_no_OT] = useState("");
    const [city_OT, setCity_OT] = useState("");
    const [district_OT, setDistrict_OT] = useState("");
    const [state_OT, setState_OT] = useState("");
    const [pincode_OT, setPincode_OT] = useState("");
    const [country_OT, setCountry_OT] = useState("");
    const [address_description_OT, setAddress_description_OT] = useState("");


    // Address functionalty states for Home
    const [homeAdd_visibility, setHomeAdd_visibility] = useState("none")
    const [addButton_forAdd_visibility, setAddButton_forAdd_visibility] = useState("flex");
    const [saveButt_forAdd_visibility, setSaveButt_forAdd_visibility] = useState("flex");
    const [editSaveButt_forAdd_visibility, setEditSaveButt_forAdd_visibility] = useState("none");
    const [editButt_forAdd_visibility, setEditButt_forAdd_visibility] = useState("none");
    const [deleteButton_forAdd_visibility, setDeleteButton_forAdd_visibility] = useState("none");
    const [seeHomeAdd, setSeeHomeAdd] = useState("none")
    const [cancellsaveNewHomeAddress, setCancellsaveNewHomeAddress] = useState("none")
    const [seeHomeAdd_butt, setSeeHomeAdd_butt] = useState("block")
    const [hideHomeAdd_butt, setHideHomeAdd_butt] = useState("none")

    const [editHomeAddrDisable, setEditHomeAddrdetailsDisable] = useState(false);


    // Address functionalty states for SHOP
    const [address_visibility_SH, setAddress_visibility_SH] = useState("none")
    const [addButton_forAdd_visibility_SH, setAddButton_forAdd_visibility_SH] = useState("flex");
    const [saveButt_forAdd_visibility_SH, setSaveButt_forAdd_visibility_SH] = useState("flex");
    const [editSaveButt_forAdd_visibility_SH, setEditSaveButt_forAdd_visibility_SH] = useState("none");
    const [editButt_forAdd_visibility_SH, setEditButt_forAdd_visibility_SH] = useState("none");
    const [deleteButton_forAdd_visibility_SH, setDeleteButton_forAdd_visibility_SH] = useState("none");
    const [seeShopAdd, setSeeShopAdd] = useState("none")
    const [cancellsaveNewShopAddress, setCancellsaveNewShopAddress] = useState("none")
    const [seeShopAdd_butt, setSeeShopAdd_butt] = useState("block")
    const [hideShopAdd_butt, setHideShopAdd_butt] = useState("none")

    const [editShopAddrDisable, setEditShopAddrdetailsDisable] = useState(false);


    // Address functionalty states for OFFICE
    const [address_visibility_OF, setAddress_visibility_OF] = useState("none")
    const [addButton_forAdd_visibility_OF, setAddButton_forAdd_visibility_OF] = useState("flex");
    const [saveButt_forAdd_visibility_OF, setSaveButt_forAdd_visibility_OF] = useState("flex");
    const [editSaveButt_forAdd_visibility_OF, setEditSaveButt_forAdd_visibility_OF] = useState("none");
    const [editButt_forAdd_visibility_OF, setEditButt_forAdd_visibility_OF] = useState("none");
    const [deleteButton_forAdd_visibility_OF, setDeleteButton_forAdd_visibility_OF] = useState("none");
    const [seeOfficeAdd, setSeeOfficeAdd] = useState("none")
    const [cancellsaveNewOfficeAddress, setCancellsaveNewOfficeAddress] = useState("none")
    const [seeOfficeAdd_butt, setSeeOfficeAdd_butt] = useState("block")
    const [hideOfficeAdd_butt, setHideOfficeAdd_butt] = useState("none")

    const [editOFFICEAddrDisable, setEditOFFICEAddrdetailsDisable] = useState(false);


    // Address functionalty states for OTHER
    const [address_visibility_OT, setAddress_visibility_OT] = useState("none")
    const [addButton_forAdd_visibility_OT, setAddButton_forAdd_visibility_OT] = useState("flex");
    const [saveButt_forAdd_visibility_OT, setSaveButt_forAdd_visibility_OT] = useState("flex");
    const [editSaveButt_forAdd_visibility_OT, setEditSaveButt_forAdd_visibility_OT] = useState("none");
    const [editButt_forAdd_visibility_OT, setEditButt_forAdd_visibility_OT] = useState("none");
    const [deleteButton_forAdd_visibility_OT, setDeleteButton_forAdd_visibility_OT] = useState("none");
    const [seeOtherAdd, setSeeOtherAdd] = useState("none")
    const [cancellsaveNewOtherAddress, setCancellsaveNewOtherAddress] = useState("none")
    const [seeOtherAdd_butt, setSeeOtherAdd_butt] = useState("block")
    const [hideOtherAdd_butt, setHideOtherAdd_butt] = useState("none")

    const [editOtherAddrDisable, setEditOtherddrdetailsDisable] = useState(false);




    // All User Address
    useEffect(() => {
        const fetchAllAddress = async () => {
            try {
                // //const token = JSON.parse(localStorage.getItem("data"));
                // console.log(token)
                const response = await fetch(`${BASE_URL}/api/user/address/getAll_UserAddress`, {
                    method: "Get",
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    },
                });
                const newData = await response.json();
                if (newData.message === "All address goted") {
                    newData.Alladdress.map((ad) => {
                        if (ad.address_type === "HOME") {
                            // setHomeA(ad)
                            setId_Address_HO(ad._id)
                            setStreet_address(ad.street_address);
                            setLandmark(ad.landmark);
                            setBuilding_no(ad.building_no);
                            setCity(ad.city);
                            setDistrict(ad.district);
                            setState(ad.state);
                            setPincode(ad.pincode);
                            setCountry(ad.country);
                            setAddress_description(ad.address_description);
                            setHomeAdd_visibility("block");
                            setAddButton_forAdd_visibility("none")

                            setEditHomeAddrdetailsDisable(true)
                            setSaveButt_forAdd_visibility("none")
                            setEditSaveButt_forAdd_visibility("none")
                            setEditButt_forAdd_visibility("flex")
                            setDeleteButton_forAdd_visibility("flex")
                            setCancellsaveNewHomeAddress("none")

                        }
                        if (ad.address_type === "SHOP") {

                            setId_Address_SH(ad._id)
                            setStreet_address_SH(ad.street_address);
                            setLandmark_SH(ad.landmark);
                            setBuilding_no_SH(ad.building_no);
                            setCity_SH(ad.city);
                            setDistrict_SH(ad.district);
                            setState_SH(ad.state);
                            setPincode_SH(ad.pincode);
                            setCountry_SH(ad.country);
                            setAddress_description_SH(ad.address_description);
                            setAddress_visibility_SH("block");
                            setAddButton_forAdd_visibility_SH("none")

                            setEditShopAddrdetailsDisable(true)
                            setSaveButt_forAdd_visibility_SH("none")
                            setEditSaveButt_forAdd_visibility_SH("none")
                            setEditButt_forAdd_visibility_SH("flex")
                            setDeleteButton_forAdd_visibility_SH("flex")
                            setCancellsaveNewShopAddress("none")
                        }

                        if (ad.address_type === "OFFICE") {

                            setId_Address_OF(ad._id)
                            setStreet_address_OF(ad.street_address);
                            setLandmark_OF(ad.landmark);
                            setBuilding_no_OF(ad.building_no);
                            setCity_OF(ad.city);
                            setDistrict_OF(ad.district);
                            setState_OF(ad.state);
                            setPincode_OF(ad.pincode);
                            setCountry_OF(ad.country);
                            setAddress_description_OF(ad.address_description);
                            setAddress_visibility_OF("block");
                            setAddButton_forAdd_visibility_OF("none")

                            setEditOFFICEAddrdetailsDisable(true)
                            setSaveButt_forAdd_visibility_OF("none")
                            setEditSaveButt_forAdd_visibility_OF("none")
                            setEditButt_forAdd_visibility_OF("flex")
                            setDeleteButton_forAdd_visibility_OF("flex")
                            setCancellsaveNewOfficeAddress("none")
                        }

                        if (ad.address_type === "OTHER") {

                            setId_Address_OT(ad._id)
                            setStreet_address_OT(ad.street_address);
                            setLandmark_OT(ad.landmark);
                            setBuilding_no_OT(ad.building_no);
                            setCity_OT(ad.city);
                            setDistrict_OT(ad.district);
                            setState_OT(ad.state);
                            setPincode_OT(ad.pincode);
                            setCountry_OT(ad.country);
                            setAddress_description_OT(ad.address_description);
                            setAddress_visibility_OT("block");
                            setAddButton_forAdd_visibility_OT("none")

                            setEditOtherddrdetailsDisable(true)
                            setSaveButt_forAdd_visibility_OT("none")
                            setEditSaveButt_forAdd_visibility_OT("none")
                            setEditButt_forAdd_visibility_OT("flex")
                            setDeleteButton_forAdd_visibility_OT("flex")
                            setCancellsaveNewOtherAddress("none")
                        }


                    })
                    // alert(newData.Alladdress[0].address_type);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchAllAddress();
    }, [token])













    // Add user Home address
    const addHome_addressButt = () => {
        setHomeAdd_visibility("block")
        setAddButton_forAdd_visibility("none")
        setCancellsaveNewHomeAddress("block")
    }

    const CancellsaveNewHomeAddress = () => {
        setHomeAdd_visibility("none")
        setAddButton_forAdd_visibility("flex")
        setCancellsaveNewHomeAddress("none")
    }

    // Save new Home saveNewHomeAddress
    const saveNewHomeAddress = () => {
        const saveHomeAddress = async () => {
            // //const token = JSON.parse(localStorage.getItem("data"));
            try {
                let response = await fetch(`${BASE_URL}/api/user/address/add_address`, {
                    method: "Post",
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ street_address, landmark, building_no, city, district, state, pincode, country, address_type: "HOME", address_description })
                });
                response = await response.json();
                if (response.message == "address add successfully") {

                    setEditHomeAddrdetailsDisable(true);
                    setSaveButt_forAdd_visibility("none");
                    setEditButt_forAdd_visibility("flex");
                    setDeleteButton_forAdd_visibility("flex");
                    setCancellsaveNewHomeAddress("none")
                    setOtpMessage(response.message)
                    setOtpMessageVisbal("20px")
                    setTimeout(() => {
                        setOtpMessageVisbal("-100px")
                        window.location.reload();
                    }, 3000)


                } else {
                    setOtpMessage(response.message)
                    setOtpMessageVisbal("45px")
                    setTimeout(() => {
                        setOtpMessageVisbal("-100px")
                    }, 3000)
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        saveHomeAddress();
    }

    // Save Edit Home Address
    const saveEditHomeAddress = () => {
        const updateHomeAddress = async () => {
            try {
                //const token = JSON.parse(localStorage.getItem("data"));
                // console.log(token)
                const response = await fetch(`${BASE_URL}/api/user/address/updateUser_Address/HOME`, {
                    method: "Put",
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ street_address, landmark, building_no, city, district, state, pincode, country, address_description })
                });
                const newData = await response.json();
                if (newData.message === "address updataed successfully") {
                    // alert(newData.message)
                    setEditButt_forAdd_visibility("flex")
                    setEditHomeAddrdetailsDisable(true)
                    setEditSaveButt_forAdd_visibility("none")
                    setDeleteButton_forAdd_visibility("flex")
                    setOtpMessage(newData.message)
                    setOtpMessageVisbal("20px")
                    setTimeout(() => {
                        setOtpMessageVisbal("-100px")
                        window.location.reload();
                    }, 3000)
                } else {
                    // alert(newData.message);
                    setOtpMessage(newData.message)
                    setOtpMessageVisbal("45px")
                    setTimeout(() => {
                        setOtpMessageVisbal("-100px")
                    }, 3000)
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        updateHomeAddress();
    }

    // Start home Address edit mode
    const editHomeAddress = () => {
        setEditHomeAddrdetailsDisable(false)
        setEditButt_forAdd_visibility("none")
        setEditSaveButt_forAdd_visibility("flex")
        setDeleteButton_forAdd_visibility("none")
        setSeeHomeAdd("flex")
        setSeeHomeAdd_butt("none")
        setHideHomeAdd_butt("block")
    }

    // delete Home Address
    const deleteHomeAddess = () => {
        const deleteHomeAddress = async () => {
            try {
                //const token = JSON.parse(localStorage.getItem("data"));
                // console.log(token)
                const response = await fetch(`${BASE_URL}/api/user/address/delete_UserAddess/HOME`, {
                    method: "Delete",
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    },

                });
                const newData = await response.json();
                if (newData.message === "address deleted successfully") {
                    // alert(newData.message)
                    setHomeAdd_visibility("none")
                    setAddButton_forAdd_visibility("flex")
                    setOtpMessage(newData.message)
                    setOtpMessageVisbal("20px")
                    setTimeout(() => {
                        setOtpMessageVisbal("-100px")
                        // window.location.reload();
                    }, 3000)
                } else {
                    // alert(newData.message);
                    setOtpMessage(newData.message)
                    setOtpMessageVisbal("45px")
                    setTimeout(() => {
                        setOtpMessageVisbal("-100px")
                    }, 3000)
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        deleteHomeAddress();
    }

    const expend_address_hight_HO = () => {
        setSeeHomeAdd("flex")
        setSeeHomeAdd_butt("none")
        setHideHomeAdd_butt("block")
    }
    const hide_address_hight_HO = () => {
        setSeeHomeAdd("none")
        setSeeHomeAdd_butt("block")
        setHideHomeAdd_butt("none")
    }











    // Add user Shop address
    const addShop_addressButt = () => {
        setAddress_visibility_SH("block")
        setAddButton_forAdd_visibility_SH("none")
        setCancellsaveNewShopAddress("block")
    }

    const CancellsaveNewShopAddress = () => {
        setAddress_visibility_SH("none")
        setAddButton_forAdd_visibility_SH("flex")
        setCancellsaveNewShopAddress("none")
    }

    // Save new Shop saveNewHomeAddress
    const saveNewShopAddress = () => {
        const saveShopAddress = async () => {
            //const token = JSON.parse(localStorage.getItem("data"));
            try {
                let response = await fetch(`${BASE_URL}/api/user/address/add_address`, {
                    method: "Post",
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ street_address: street_address_SH, landmark: landmark_SH, building_no: building_no_SH, city: city_SH, district: district_SH, state: state_SH, pincode: pincode_SH, country: country_SH, address_type: "SHOP", address_description: address_description_SH })
                });
                response = await response.json();
                if (response.message == "address add successfully") {
                    // alert(response.message);
                    setEditShopAddrdetailsDisable(true);
                    setSaveButt_forAdd_visibility_SH("none");
                    setEditButt_forAdd_visibility_SH("flex");
                    setDeleteButton_forAdd_visibility_SH("flex");
                    setCancellsaveNewShopAddress("none")
                    setOtpMessage(response.message)
                    setOtpMessageVisbal("20px")
                    setTimeout(() => {
                        setOtpMessageVisbal("-100px")
                        window.location.reload();
                    }, 3000)

                } else {
                    setOtpMessage(response.message)
                    setOtpMessageVisbal("45px")
                    setTimeout(() => {
                        setOtpMessageVisbal("-100px")
                    }, 3000)
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        saveShopAddress();
    }

    // Save Edit Shop Address
    const saveEditShopAddress = () => {
        const updateShopAddress = async () => {
            try {
                //const token = JSON.parse(localStorage.getItem("data"));
                // console.log(token)
                const response = await fetch(`${BASE_URL}/api/user/address/updateUser_Address/SHOP`, {
                    method: "Put",
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ street_address: street_address_SH, landmark: landmark_SH, building_no: building_no_SH, city: city_SH, district: district_SH, state: state_SH, pincode: pincode_SH, country: country_SH, address_description: address_description_SH })
                });
                const newData = await response.json();
                if (newData.message === "address updataed successfully") {
                    // alert(newData.message)
                    setEditButt_forAdd_visibility_SH("flex")
                    setEditShopAddrdetailsDisable(true)
                    setEditSaveButt_forAdd_visibility_SH("none")
                    setDeleteButton_forAdd_visibility_SH("flex")
                    setOtpMessage(newData.message)
                    setOtpMessageVisbal("20px")
                    setTimeout(() => {
                        setOtpMessageVisbal("-100px")
                        // window.location.reload();
                    }, 3000)
                } else {
                    setOtpMessage(newData.message)
                    setOtpMessageVisbal("45px")
                    setTimeout(() => {
                        setOtpMessageVisbal("-100px")
                    }, 3000)
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        updateShopAddress();
    }

    // Start Shop Address edit mode
    const editShopAddress = () => {
        setEditShopAddrdetailsDisable(false)
        setEditButt_forAdd_visibility_SH("none")
        setEditSaveButt_forAdd_visibility_SH("flex")
        setDeleteButton_forAdd_visibility_SH("none")
        setSeeShopAdd("flex")
        setSeeShopAdd_butt("none")
        setHideShopAdd_butt("block")
    }

    // delete Shop Address
    const deleteShopAddess = () => {
        const deleteShop_Address = async () => {
            try {
                //const token = JSON.parse(localStorage.getItem("data"));
                // console.log(token)
                const response = await fetch(`${BASE_URL}/api/user/address/delete_UserAddess/SHOP`, {
                    method: "Delete",
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    },

                });
                const newData = await response.json();
                if (newData.message === "address deleted successfully") {
                    // alert(newData.message)
                    setAddress_visibility_SH("none")
                    setAddButton_forAdd_visibility_SH("flex")
                    setOtpMessage(newData.message)
                    setOtpMessageVisbal("20px")
                    setTimeout(() => {
                        setOtpMessageVisbal("-100px")
                        // window.location.reload();
                    }, 3000)
                } else {
                    // alert(newData.message);
                    setOtpMessage(newData.message)
                    setOtpMessageVisbal("45px")
                    setTimeout(() => {
                        setOtpMessageVisbal("-100px")
                    }, 3000)
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        deleteShop_Address();
    }

    const expend_address_hight_SH = () => {
        setSeeShopAdd("flex")
        setSeeShopAdd_butt("none")
        setHideShopAdd_butt("block")
    }
    const hide_address_hight_SH = () => {
        setSeeShopAdd("none")
        setSeeShopAdd_butt("block")
        setHideShopAdd_butt("none")
    }










    // Add user Office address
    const addOffice_addressButt = () => {
        setAddress_visibility_OF("block")
        setAddButton_forAdd_visibility_OF("none")
        setCancellsaveNewOfficeAddress("block")
    }

    const CancellsaveNewOfficeAddress = () => {
        setAddress_visibility_OF("none")
        setAddButton_forAdd_visibility_OF("flex")
        setCancellsaveNewOfficeAddress("none")
    }

    // Save new Office saveNewHomeAddress
    const saveNewOfficeAddress = () => {
        const saveOfficeAddress = async () => {
            //const token = JSON.parse(localStorage.getItem("data"));
            try {
                let response = await fetch(`${BASE_URL}/api/user/address/add_address`, {
                    method: "Post",
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ street_address: street_address_OF, landmark: landmark_OF, building_no: building_no_OF, city: city_OF, district: district_OF, state: state_OF, pincode: pincode_OF, country: country_OF, address_type: "OFFICE", address_description: address_description_OF })
                });
                response = await response.json();
                if (response.message == "address add successfully") {
                    // alert(response.message);
                    setEditOFFICEAddrdetailsDisable(true);
                    setSaveButt_forAdd_visibility_OF("none");
                    setEditButt_forAdd_visibility_OF("flex");
                    setDeleteButton_forAdd_visibility_OF("flex");
                    setCancellsaveNewOfficeAddress("none")
                    setOtpMessage(response.message)
                    setOtpMessageVisbal("20px")
                    setTimeout(() => {
                        setOtpMessageVisbal("-100px")
                        window.location.reload();
                    }, 3000)

                } else {
                    // alert(response.message);
                    setOtpMessage(response.message)
                    setOtpMessageVisbal("45px")
                    setTimeout(() => {
                        setOtpMessageVisbal("-100px")
                    }, 3000)
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        saveOfficeAddress();
    }

    // Save Edit Office Address
    const saveEditOfficeAddress = () => {
        const updateOfficeAddress = async () => {
            try {
                //const token = JSON.parse(localStorage.getItem("data"));
                // console.log(token)
                const response = await fetch(`${BASE_URL}/api/user/address/updateUser_Address/OFFICE`, {
                    method: "Put",
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ street_address: street_address_OF, landmark: landmark_OF, building_no: building_no_OF, city: city_OF, district: district_OF, state: state_OF, pincode: pincode_OF, country: country_OF, address_description: address_description_OF })
                });
                const newData = await response.json();
                if (newData.message === "address updataed successfully") {
                    // alert(newData.message)
                    setEditButt_forAdd_visibility_OF("flex")
                    setEditOFFICEAddrdetailsDisable(true)
                    setEditSaveButt_forAdd_visibility_OF("none")
                    setDeleteButton_forAdd_visibility_OF("flex")
                    setOtpMessage(newData.message)
                    setOtpMessageVisbal("20px")
                    setTimeout(() => {
                        setOtpMessageVisbal("-100px")
                        // window.location.reload();
                    }, 3000)
                } else {
                    // alert(newData.message);
                    setOtpMessage(newData.message)
                    setOtpMessageVisbal("45px")
                    setTimeout(() => {
                        setOtpMessageVisbal("-100px")
                    }, 3000)
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        updateOfficeAddress();
    }

    // Start OFFICE Address edit mode
    const editOfficeAddress = () => {
        setEditOFFICEAddrdetailsDisable(false)
        setEditButt_forAdd_visibility_OF("none")
        setEditSaveButt_forAdd_visibility_OF("flex")
        setDeleteButton_forAdd_visibility_OF("none")
        setSeeOfficeAdd("flex")
        setSeeOfficeAdd_butt("none")
        setHideOfficeAdd_butt("block")
    }

    // delete Office Address
    const deleteOfficeAddess = () => {
        const deleteOffice_Address = async () => {
            try {
                //const token = JSON.parse(localStorage.getItem("data"));
                // console.log(token)
                const response = await fetch(`${BASE_URL}/api/user/address/delete_UserAddess/OFFICE`, {
                    method: "Delete",
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    },

                });
                const newData = await response.json();
                if (newData.message === "address deleted successfully") {
                    // alert(newData.message)
                    setAddress_visibility_OF("none")
                    setAddButton_forAdd_visibility_OF("flex")
                    setOtpMessage(newData.message)
                    setOtpMessageVisbal("20px")
                    setTimeout(() => {
                        setOtpMessageVisbal("-100px")
                        // window.location.reload();
                    }, 3000)
                } else {
                    // alert(newData.message);
                    setOtpMessage(newData.message)
                    setOtpMessageVisbal("45px")
                    setTimeout(() => {
                        setOtpMessageVisbal("-100px")
                    }, 3000)
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        deleteOffice_Address();
    }

    const expend_address_hight_OF = () => {
        setSeeOfficeAdd("flex")
        setSeeOfficeAdd_butt("none")
        setHideOfficeAdd_butt("block")
    }
    const hide_address_hight_OF = () => {
        setSeeOfficeAdd("none")
        setSeeOfficeAdd_butt("block")
        setHideOfficeAdd_butt("none")
    }






    // Add user Other address
    const addOther_addressButt = () => {
        setAddress_visibility_OT("block")
        setAddButton_forAdd_visibility_OT("none")
        setCancellsaveNewOtherAddress("block")
    }

    const CancellsaveNewOtherAddress = () => {
        setAddress_visibility_OT("none")
        setAddButton_forAdd_visibility_OT("flex")
        setCancellsaveNewOtherAddress("none")
    }

    // Save new Other saveNewHomeAddress
    const saveNewOtherAddress = () => {
        const saveOtherAddress = async () => {
            //const token = JSON.parse(localStorage.getItem("data"));
            try {
                let response = await fetch(`${BASE_URL}/api/user/address/add_address`, {
                    method: "Post",
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ street_address: street_address_OT, landmark: landmark_OT, building_no: building_no_OT, city: city_OT, district: district_OT, state: state_OT, pincode: pincode_OT, country: country_OT, address_type: "OTHER", address_description: address_description_OT })
                });
                response = await response.json();
                if (response.message == "address add successfully") {
                    // alert(response.message);
                    setEditOtherddrdetailsDisable(true);
                    setSaveButt_forAdd_visibility_OT("none");
                    setEditButt_forAdd_visibility_OT("flex");
                    setDeleteButton_forAdd_visibility_OT("flex");
                    setCancellsaveNewOtherAddress("none")
                    setOtpMessage(response.message)
                    setOtpMessageVisbal("20px")
                    setTimeout(() => {
                        setOtpMessageVisbal("-100px")
                        window.location.reload();
                    }, 3000)

                } else {
                    setOtpMessage(response.message)
                    setOtpMessageVisbal("45px")
                    setTimeout(() => {
                        setOtpMessageVisbal("-100px")
                    }, 3000)
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        saveOtherAddress();
    }

    // Save Edit Other Address
    const saveEditOtherAddress = () => {
        const updateOtehr_Address = async () => {
            try {
                //const token = JSON.parse(localStorage.getItem("data"));
                // console.log(token)
                const response = await fetch(`${BASE_URL}/api/user/address/updateUser_Address/OTHER`, {
                    method: "Put",
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ street_address: street_address_OT, landmark: landmark_OT, building_no: building_no_OT, city: city_OT, district: district_OT, state: state_OT, pincode: pincode_OT, country: country_OT, address_description: address_description_OT })
                });
                const newData = await response.json();
                if (newData.message === "address updataed successfully") {
                    // alert(newData.message)
                    setEditButt_forAdd_visibility_OT("flex")
                    setEditOtherddrdetailsDisable(true)
                    setEditSaveButt_forAdd_visibility_OT("none")
                    setDeleteButton_forAdd_visibility_OT("flex")
                    setOtpMessage(newData.message)
                    setOtpMessageVisbal("20px")
                    setTimeout(() => {
                        setOtpMessageVisbal("-100px")
                        // window.location.reload();
                    }, 3000)
                } else {
                    // alert(newData.message);
                    setOtpMessage(newData.message)
                    setOtpMessageVisbal("45px")
                    setTimeout(() => {
                        setOtpMessageVisbal("-100px")
                    }, 3000)
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        updateOtehr_Address();
    }

    // Start Other Address edit mode
    const editOtherAddress = () => {
        setEditOtherddrdetailsDisable(false)
        setEditButt_forAdd_visibility_OT("none")
        setEditSaveButt_forAdd_visibility_OT("flex")
        setDeleteButton_forAdd_visibility_OT("none")
        setSeeOtherAdd("flex")
        setSeeOtherAdd_butt("none")
        setHideOtherAdd_butt("block")
    }

    // delete Other Address
    const deleteOtherAddess = () => {
        const deleteOther_Address = async () => {
            try {
                //const token = JSON.parse(localStorage.getItem("data"));
                // console.log(token)
                const response = await fetch(`${BASE_URL}/api/user/address/delete_UserAddess/OTHER`, {
                    method: "Delete",
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    },

                });
                const newData = await response.json();
                if (newData.message === "address deleted successfully") {
                    // alert(newData.message)
                    setAddress_visibility_OT("none")
                    setAddButton_forAdd_visibility_OT("flex")
                    setOtpMessage(newData.message)
                    setOtpMessageVisbal("20px")
                    setTimeout(() => {
                        setOtpMessageVisbal("-100px")
                        // window.location.reload();
                    }, 3000)
                } else {
                    // alert(newData.message);
                    setOtpMessage(newData.message)
                    setOtpMessageVisbal("45px")
                    setTimeout(() => {
                        setOtpMessageVisbal("-100px")
                    }, 3000)
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        deleteOther_Address();
    }

    const expend_address_hight_OT = () => {
        setSeeOtherAdd("flex")
        setSeeOtherAdd_butt("none")
        setHideOtherAdd_butt("block")
    }
    const hide_address_hight_OT = () => {
        setSeeOtherAdd("none")
        setSeeOtherAdd_butt("block")
        setHideOtherAdd_butt("none")
    }

    return (
        <>
            <div className={style2.therd_div_account}>

                {/* Home address */}
                <div onClick={() => id_Address_HO !== null ? sendData("HOME", `HOME, Street address- ${street_address}, Landmark- ${landmark}, Building No- ${building_no}, City- ${city}, District- ${district}, State- ${state}, Pincode- ${pincode}, Country- ${country}, Description- ${address_description}`) : ""} className={style2.address} style={{ display: homeAdd_visibility, border: selectedButton === "HOME" ? ("4px solid #0C2D57") : ("0px") }}>
                    <div>
                        <h5>
                            <svg onClick={() => expend_address_hight_HO()} style={{ display: seeHomeAdd_butt }} xmlns="http://www.w3.org/2000/svg" fill='#0c2d57' height="20" viewBox="0 -960 960 960" width="24"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" /></svg>
                            <svg onClick={() => hide_address_hight_HO()} style={{ display: hideHomeAdd_butt }} xmlns="http://www.w3.org/2000/svg" fill='#0c2d57' height="24" viewBox="0 -960 960 960" width="24"><path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z" /></svg>
                            <Image alt=" " src={homeaddresssvg} width={17} />
                            &nbsp;&nbsp;Home
                        </h5>
                        <div>
                            <button className={style2.cancel_button} style={{ display: cancellsaveNewHomeAddress }} onClick={CancellsaveNewHomeAddress}>Cancel</button>
                            <button className={style2.savebutt_foradd} style={{ display: saveButt_forAdd_visibility }} onClick={saveNewHomeAddress}><svg xmlns="http://www.w3.org/2000/svg" fill="white" height="17" viewBox="0 -960 960 960" width="17"><path d="M840-680v480q0 33-23.5 56.5T760-120H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h480l160 160Zm-80 34L646-760H200v560h560v-446ZM480-240q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM240-560h360v-160H240v160Zm-40-86v446-560 114Z"/></svg>Save</button>
                            <button className={style2.saveButt_forUPDATE} style={{ display: editSaveButt_forAdd_visibility }} onClick={saveEditHomeAddress}><svg xmlns="http://www.w3.org/2000/svg" fill="white" height="17" viewBox="0 -960 960 960" width="17"><path d="M840-680v480q0 33-23.5 56.5T760-120H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h480l160 160Zm-80 34L646-760H200v560h560v-446ZM480-240q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM240-560h360v-160H240v160Zm-40-86v446-560 114Z"/></svg>Save</button>
                            <button className={style2.eidtButt_Address} style={{ display: editButt_forAdd_visibility }} onClick={editHomeAddress}> <Image alt=" " src={editsvg} width={17} /> </button>
                            <button className={style2.deleteButt_Address} style={{ display: deleteButton_forAdd_visibility }} onClick={deleteHomeAddess}> <Image alt=" " src={deletesvg} width={17} /> </button>
                        </div>
                    </div>

                    <div className={style2.address_inner_div} style={{ display: seeHomeAdd }}>
                        <div className={style2.add1}>
                            <label>Street address : </label>
                            <input value={street_address} onChange={(e) => setStreet_address(e.target.value)} disabled={editHomeAddrDisable} />
                        </div>
                        <div className={style2.add1}>
                            <label>Landmark : </label>
                            <input value={landmark} onChange={(e) => setLandmark(e.target.value)} disabled={editHomeAddrDisable} />
                        </div>
                        <div className={style2.add1}>
                            <label>Building no : </label>
                            <input value={building_no} onChange={(e) => setBuilding_no(e.target.value)} disabled={editHomeAddrDisable} />
                        </div>
                        <div className={style2.add1}>
                            <label>city : </label>
                            <input value={city} onChange={(e) => setCity(e.target.value)} disabled={editHomeAddrDisable} />
                        </div>
                        <div className={style2.add1}>
                            <label>District : </label>
                            <input value={district} onChange={(e) => setDistrict(e.target.value)} disabled={editHomeAddrDisable} />
                        </div>
                        <div className={style2.add1}>
                            <label>State : </label>
                            <input value={state} onChange={(e) => setState(e.target.value)} disabled={editHomeAddrDisable} />
                        </div>
                        <div className={style2.add1}>
                            <label>Pincode : </label>
                            <input type='number' className={style2.pincod_input} value={pincode} onChange={(e) => setPincode(e.target.value)} disabled={editHomeAddrDisable} />
                        </div>
                        <div className={style2.add1}>
                            <label>Country : </label>
                            <input value={country} onChange={(e) => setCountry(e.target.value)} disabled={editHomeAddrDisable} />
                        </div>
                        <div className={style2.description}>
                            <label>Description :</label>
                            <textarea type='text' value={address_description} onChange={(e) => setAddress_description(e.target.value)} disabled={editHomeAddrDisable} />
                        </div>
                    </div>
                </div>



                {/* Shop address */}
                <div onClick={() => id_Address_SH !== null ? sendData("SHOP", `SHOP, Street address- ${street_address_SH}, Landmark- ${landmark_SH}, Building No- ${building_no_SH}, City- ${city_SH}, District- ${district_SH}, State- ${state_SH}, Pincode- ${pincode_SH}, Country- ${country_SH}, Description- ${address_description_SH}`) : ""} className={style2.address} style={{ display: address_visibility_SH, border: selectedButton === "SHOP" ? "4px solid #0C2D57" : "0px" }}>
                    <div>
                        <h5>
                            <svg onClick={() => expend_address_hight_SH()} style={{ display: seeShopAdd_butt }} xmlns="http://www.w3.org/2000/svg" fill='#0c2d57' height="20" viewBox="0 -960 960 960" width="24"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" /></svg>
                            <svg onClick={() => hide_address_hight_SH()} style={{ display: hideShopAdd_butt }} xmlns="http://www.w3.org/2000/svg" fill='#0c2d57' height="24" viewBox="0 -960 960 960" width="24"><path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z" /></svg>
                            <Image alt=" " src={shopaddresssvg} width={17} />
                            &nbsp;&nbsp;Shop
                        </h5>
                        <div>
                            <button className={style2.cancel_button} style={{ display: cancellsaveNewShopAddress }} onClick={CancellsaveNewShopAddress}>Cancel</button>
                            <button className={style2.savebutt_foradd} style={{ display: saveButt_forAdd_visibility_SH }} onClick={saveNewShopAddress}><svg xmlns="http://www.w3.org/2000/svg" fill="white" height="17" viewBox="0 -960 960 960" width="17"><path d="M840-680v480q0 33-23.5 56.5T760-120H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h480l160 160Zm-80 34L646-760H200v560h560v-446ZM480-240q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM240-560h360v-160H240v160Zm-40-86v446-560 114Z"/></svg>Save</button>
                            <button className={style2.saveButt_forUPDATE} style={{ display: editSaveButt_forAdd_visibility_SH }} onClick={saveEditShopAddress}><svg xmlns="http://www.w3.org/2000/svg" fill="white" height="17" viewBox="0 -960 960 960" width="17"><path d="M840-680v480q0 33-23.5 56.5T760-120H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h480l160 160Zm-80 34L646-760H200v560h560v-446ZM480-240q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM240-560h360v-160H240v160Zm-40-86v446-560 114Z"/></svg>Save</button>
                            <button className={style2.eidtButt_Address} style={{ display: editButt_forAdd_visibility_SH }} onClick={editShopAddress}> <Image alt=" " src={editsvg} width={17} /> </button>
                            <button className={style2.deleteButt_Address} style={{ display: deleteButton_forAdd_visibility_SH }} onClick={deleteShopAddess}> <Image alt=" " src={deletesvg} width={17} /> </button>
                        </div>
                    </div>

                    <div className={style2.address_inner_div} style={{ display: seeShopAdd }}>
                        <div className={style2.add1}>
                            <label>Street address : </label>
                            <input value={street_address_SH} onChange={(e) => setStreet_address_SH(e.target.value)} disabled={editShopAddrDisable} />
                        </div>
                        <div className={style2.add1}>
                            <label>Landmark : </label>
                            <input value={landmark_SH} onChange={(e) => setLandmark_SH(e.target.value)} disabled={editShopAddrDisable} />
                        </div>
                        <div className={style2.add1}>
                            <label>Building no : </label>
                            <input value={building_no_SH} onChange={(e) => setBuilding_no_SH(e.target.value)} disabled={editShopAddrDisable} />
                        </div>
                        <div className={style2.add1}>
                            <label>city : </label>
                            <input value={city_SH} onChange={(e) => setCity_SH(e.target.value)} disabled={editShopAddrDisable} />
                        </div>
                        <div className={style2.add1}>
                            <label>District : </label>
                            <input value={district_SH} onChange={(e) => setDistrict_SH(e.target.value)} disabled={editShopAddrDisable} />
                        </div>
                        <div className={style2.add1}>
                            <label>State : </label>
                            <input value={state_SH} onChange={(e) => setState_SH(e.target.value)} disabled={editShopAddrDisable} />
                        </div>
                        <div className={style2.add1}>
                            <label>Pincode : </label>
                            <input type='number' className={style2.pincod_input} value={pincode_SH} onChange={(e) => setPincode_SH(e.target.value)} disabled={editShopAddrDisable} />
                        </div>
                        <div className={style2.add1}>
                            <label>Country : </label>
                            <input value={country_SH} onChange={(e) => setCountry_SH(e.target.value)} disabled={editShopAddrDisable} />
                        </div>
                        <div className={style2.description}>
                            <label>Description :</label>
                            <textarea type='text' value={address_description_SH} onChange={(e) => setAddress_description_SH(e.target.value)} disabled={editShopAddrDisable} />
                        </div>
                    </div>
                </div>


                {/* OFFICE address */}
                <div onClick={() => id_Address_OF !== null ? sendData("OFFICE", `OFFICE, Street address- ${street_address_OF}, Landmark- ${landmark_OF}, Building No- ${building_no_OF}, City- ${city_OF}, District- ${district_OF}, State- ${state_OF}, Pincode- ${pincode_OF}, Country- ${country_OF}, Description- ${address_description_OF}`) : ""} className={style2.address} style={{ display: address_visibility_OF, border: selectedButton === "OFFICE" ? "4px solid #0C2D57" : "0px" }}>
                    <div>
                        <h5>
                            <svg onClick={() => expend_address_hight_OF()} style={{ display: seeOfficeAdd_butt }} xmlns="http://www.w3.org/2000/svg" fill='#0c2d57' height="20" viewBox="0 -960 960 960" width="24"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" /></svg>
                            <svg onClick={() => hide_address_hight_OF()} style={{ display: hideOfficeAdd_butt }} xmlns="http://www.w3.org/2000/svg" fill='#0c2d57' height="24" viewBox="0 -960 960 960" width="24"><path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z" /></svg>
                            <Image alt=" " src={offiecaddresssvg} width={17} />
                            &nbsp;&nbsp;Office
                        </h5>
                        <div>
                            <button className={style2.cancel_button} style={{ display: cancellsaveNewOfficeAddress }} onClick={CancellsaveNewOfficeAddress}>Cancel</button>
                            <button className={style2.savebutt_foradd} style={{ display: saveButt_forAdd_visibility_OF }} onClick={saveNewOfficeAddress}><svg xmlns="http://www.w3.org/2000/svg" fill="white" height="17" viewBox="0 -960 960 960" width="17"><path d="M840-680v480q0 33-23.5 56.5T760-120H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h480l160 160Zm-80 34L646-760H200v560h560v-446ZM480-240q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM240-560h360v-160H240v160Zm-40-86v446-560 114Z"/></svg>Save</button>
                            <button className={style2.saveButt_forUPDATE} style={{ display: editSaveButt_forAdd_visibility_OF }} onClick={saveEditOfficeAddress}><svg xmlns="http://www.w3.org/2000/svg" fill="white" height="17" viewBox="0 -960 960 960" width="17"><path d="M840-680v480q0 33-23.5 56.5T760-120H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h480l160 160Zm-80 34L646-760H200v560h560v-446ZM480-240q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM240-560h360v-160H240v160Zm-40-86v446-560 114Z"/></svg>Save</button>
                            <button className={style2.eidtButt_Address} style={{ display: editButt_forAdd_visibility_OF }} onClick={editOfficeAddress}> <Image alt=" " src={editsvg} width={17} /> </button>
                            <button className={style2.deleteButt_Address} style={{ display: deleteButton_forAdd_visibility_OF }} onClick={deleteOfficeAddess}> <Image alt=" " src={deletesvg} width={17} /> </button>
                        </div>
                    </div>

                    <div className={style2.address_inner_div} style={{ display: seeOfficeAdd }}>
                        <div className={style2.add1}>
                            <label>Street address : </label>
                            <input value={street_address_OF} onChange={(e) => setStreet_address_OF(e.target.value)} disabled={editOFFICEAddrDisable} />
                        </div>
                        <div className={style2.add1}>
                            <label>Landmark : </label>
                            <input value={landmark_OF} onChange={(e) => setLandmark_OF(e.target.value)} disabled={editOFFICEAddrDisable} />
                        </div>
                        <div className={style2.add1}>
                            <label>Building no : </label>
                            <input value={building_no_OF} onChange={(e) => setBuilding_no_OF(e.target.value)} disabled={editOFFICEAddrDisable} />
                        </div>
                        <div className={style2.add1}>
                            <label>city : </label>
                            <input value={city_OF} onChange={(e) => setCity_OF(e.target.value)} disabled={editOFFICEAddrDisable} />
                        </div>
                        <div className={style2.add1}>
                            <label>District : </label>
                            <input value={district_OF} onChange={(e) => setDistrict_OF(e.target.value)} disabled={editOFFICEAddrDisable} />
                        </div>
                        <div className={style2.add1}>
                            <label>State : </label>
                            <input value={state_OF} onChange={(e) => setState_OF(e.target.value)} disabled={editOFFICEAddrDisable} />
                        </div>
                        <div className={style2.add1}>
                            <label>Pincode : </label>
                            <input type='number' className={style2.pincod_input} value={pincode_OF} onChange={(e) => setPincode_OF(e.target.value)} disabled={editOFFICEAddrDisable} />
                        </div>
                        <div className={style2.add1}>
                            <label>Country : </label>
                            <input value={country_OF} onChange={(e) => setCountry_OF(e.target.value)} disabled={editOFFICEAddrDisable} />
                        </div>
                        <div className={style2.description}>
                            <label>Description :</label>
                            <textarea type='text' value={address_description_OF} onChange={(e) => setAddress_description_OF(e.target.value)} disabled={editOFFICEAddrDisable} />
                        </div>
                    </div>
                </div>


                {/* OTHER address */}
                <div onClick={() => id_Address_OT !== null ? sendData("OTHER", `OTHER, Street address- ${street_address_OT}, Landmark- ${landmark_OT}, Building No- ${building_no_OT}, City- ${city_OT}, District- ${district_OT}, State- ${state_OT}, Pincode- ${pincode_OT}, Country- ${country_OT}, Description- ${address_description_OT}`) : ""} className={style2.address} style={{ display: address_visibility_OT, border: selectedButton === "OTHER" ? "4px solid #0C2D57" : "0px" }}>
                    <div>
                        <h5>
                            <svg onClick={() => expend_address_hight_OT()} style={{ display: seeOtherAdd_butt }} xmlns="http://www.w3.org/2000/svg" fill='#0c2d57' height="20" viewBox="0 -960 960 960" width="24"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" /></svg>
                            <svg onClick={() => hide_address_hight_OT()} style={{ display: hideOtherAdd_butt }} xmlns="http://www.w3.org/2000/svg" fill='#0c2d57' height="24" viewBox="0 -960 960 960" width="24"><path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z" /></svg>
                            <Image alt=" " src={otheraddresssvg} width={17} />
                            &nbsp;&nbsp;Other
                        </h5>
                        <div>
                            <button className={style2.cancel_button} style={{ display: cancellsaveNewOtherAddress }} onClick={CancellsaveNewOtherAddress}>Cancel</button>
                            <button className={style2.savebutt_foradd} style={{ display: saveButt_forAdd_visibility_OT }} onClick={saveNewOtherAddress}><svg xmlns="http://www.w3.org/2000/svg" fill="white" height="17" viewBox="0 -960 960 960" width="17"><path d="M840-680v480q0 33-23.5 56.5T760-120H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h480l160 160Zm-80 34L646-760H200v560h560v-446ZM480-240q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM240-560h360v-160H240v160Zm-40-86v446-560 114Z"/></svg>Save</button>
                            <button className={style2.saveButt_forUPDATE} style={{ display: editSaveButt_forAdd_visibility_OT }} onClick={saveEditOtherAddress}><svg xmlns="http://www.w3.org/2000/svg" fill="white" height="17" viewBox="0 -960 960 960" width="17"><path d="M840-680v480q0 33-23.5 56.5T760-120H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h480l160 160Zm-80 34L646-760H200v560h560v-446ZM480-240q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM240-560h360v-160H240v160Zm-40-86v446-560 114Z"/></svg>Save</button>
                            <button className={style2.eidtButt_Address} style={{ display: editButt_forAdd_visibility_OT }} onClick={editOtherAddress}> <Image alt=" " src={editsvg} width={17} /> </button>
                            <button className={style2.deleteButt_Address} style={{ display: deleteButton_forAdd_visibility_OT }} onClick={deleteOtherAddess}> <Image alt=" " src={deletesvg} width={17} /> </button>
                        </div>
                    </div>

                    <div className={style2.address_inner_div} style={{ display: seeOtherAdd }}>
                        <div className={style2.add1}>
                            <label>Street address : </label>
                            <input value={street_address_OT} onChange={(e) => setStreet_address_OT(e.target.value)} disabled={editOtherAddrDisable} />
                        </div>
                        <div className={style2.add1}>
                            <label>Landmark : </label>
                            <input value={landmark_OT} onChange={(e) => setLandmark_OT(e.target.value)} disabled={editOtherAddrDisable} />
                        </div>
                        <div className={style2.add1}>
                            <label>Building no : </label>
                            <input value={building_no_OT} onChange={(e) => setBuilding_no_OT(e.target.value)} disabled={editOtherAddrDisable} />
                        </div>
                        <div className={style2.add1}>
                            <label>city : </label>
                            <input value={city_OT} onChange={(e) => setCity_OT(e.target.value)} disabled={editOtherAddrDisable} />
                        </div>
                        <div className={style2.add1}>
                            <label>District : </label>
                            <input value={district_OT} onChange={(e) => setDistrict_OT(e.target.value)} disabled={editOtherAddrDisable} />
                        </div>
                        <div className={style2.add1}>
                            <label>State : </label>
                            <input value={state_OT} onChange={(e) => setState_OT(e.target.value)} disabled={editOtherAddrDisable} />
                        </div>
                        <div className={style2.add1}>
                            <label>Pincode : </label>
                            <input type='number' className={style2.pincod_input} value={pincode_OT} onChange={(e) => setPincode_OT(e.target.value)} disabled={editOtherAddrDisable} />
                        </div>
                        <div className={style2.add1}>
                            <label>Country : </label>
                            <input value={country_OT} onChange={(e) => setCountry_OT(e.target.value)} disabled={editOtherAddrDisable} />
                        </div>
                        <div className={style2.description}>
                            <label>Description :</label>
                            <textarea type='text' value={address_description_OT} onChange={(e) => setAddress_description_OT(e.target.value)} disabled={editOtherAddrDisable} />
                        </div>
                    </div>
                </div>

                <button onClick={addHome_addressButt} style={{ display: addButton_forAdd_visibility }}><Image alt=" " src={addsvg} />ADD HOME</button>
                <button onClick={addShop_addressButt} style={{ display: addButton_forAdd_visibility_SH }}><Image alt=" " src={addsvg} />ADD SHOP</button>
                <button onClick={addOffice_addressButt} style={{ display: addButton_forAdd_visibility_OF }}><Image alt=" " src={addsvg} />ADD OFFICE</button>
                <button onClick={addOther_addressButt} style={{ display: addButton_forAdd_visibility_OT }}><Image alt=" " src={addsvg} />ADD OTHER</button>
            </div>
            {/* <Message top={otpMessageVisbal} data={otpMessage} /> */}
            <Warning top={otpMessageVisbal} data={otpMessage}/>
        </>
    )
}
