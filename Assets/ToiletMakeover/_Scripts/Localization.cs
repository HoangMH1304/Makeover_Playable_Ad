using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.Networking;
using System.Globalization;

public class Localization : MonoBehaviour
{
	[SerializeField] Text textState;
	[SerializeField] Text textContinent;
	[SerializeField] Text textCountry;
	[SerializeField] Text textCity;

	void Start()
	{
		//textState.text = "";
		StartCoroutine(DetectCountry());
		//RegionInfo
	}

    IEnumerator DetectCountry()
	{
		using (UnityWebRequest request = UnityWebRequest.Get("http://www.geoplugin.net/json.gp"))
        {
			yield return request.SendWebRequest();
			if(request.result != UnityWebRequest.Result.Success)
            {
				Debug.LogError("can't get country code due to network");
            }
            else
            {
				var jsonData = request.downloadHandler.text;
                try
                {
					GeoLocation geoLocation = JsonUtility.FromJson<GeoLocation>(jsonData);
					Debug.LogError("country code: " + geoLocation.geoplugin_countryCode);

				}
				catch (System.Exception ex)
                {
					Debug.LogError("Can't parse json data");
                    throw;
                }
            }
        }
		//	request.chunkedTransfer = false;
		//yield return request.Send();

		//if (request.isError)
		//{
		//	Debug.LogError("request error");
		//	//textState.text = "error : " + request.error;
		//}
		//else
		//{
		//	if (request.isDone)
		//	{
		//		Country res = JsonUtility.FromJson<Country>(request.downloadHandler.text);
		//		//textState.text = "";
		//		//textContinent.text = res.continent;
		//		//textCity.text = res.city;
		//		//textCountry.text = res.country;
		//		Debug.LogError("country code: " + res.countryCode);
		//	}
		//}
	}
}